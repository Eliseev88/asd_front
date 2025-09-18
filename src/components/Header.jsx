import '../styles/Header.scss'
import LOGO from '../assets/icons/logo.svg';
import Button from './Button';
import LangSwitcher from './LangSwitcher';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

function Header() {
	const {t} = useTranslation();

	const [ isOpenMenu, setIsOpenMenu ] = useState(false);
	const [ scrollPos, setScrollPos ] = useState(0);

	const toggleMenu = () => {
		!isOpenMenu && setScrollPos(window.pageYOffset);
		setIsOpenMenu(!isOpenMenu);
	}

	const handleLink = (e) => {
		e.stopPropagation();
		setIsOpenMenu(false);
	}

	useEffect(() => {
		const CONTENT = document.getElementById('content');
		const OVERLAY = document.getElementById('overlay');

		isOpenMenu ? CONTENT.style.position = 'fixed' : CONTENT.style.position = 'static';
		isOpenMenu ? CONTENT.style.top = `-${scrollPos - 75}px` : CONTENT.style.top = '';

		isOpenMenu ? OVERLAY.style.display = 'block' : OVERLAY.style.display = 'none';

		!isOpenMenu && window.scrollBy(0, scrollPos);
	}, [isOpenMenu]);

  return (
	<header className={['header', isOpenMenu ? '__open' : ''].join(' ')}>
		<div className={['header__wrp', isOpenMenu ? '__open' : ''].join(' ')}>
			<a className='header__link-logo' href="#intro"><img src={LOGO} alt="logo" className='header__logo' /></a>
			<nav className='nav'>
				<ul className='nav__list'>
					<li className='nav__element'>
						<a href='#advantages' className='link'>{t('Преимущества')}</a>
					</li>
					<li className='nav__element'>
						<a href='#tariffs' className='link'>{t('Тарифы и цены')}</a>
					</li>
					<li className='nav__element'>
						<a href='#faq' className='link'>FAQ</a>
					</li>
					<li className='nav__element'>
						<a href='#contacts' className='link'>{t('Связаться с нами')}</a>
					</li>
				</ul>
			</nav>
			<Button className='header__btn'>{t('Личный кабинет')}</Button>

			<LangSwitcher className='__hidden'/>

			<button className={['burger', isOpenMenu ? '__open' : ''].join(' ')} onClick={toggleMenu}></button>
		</div>
			<div className={['mobile-header', isOpenMenu ? '__open' : ''].join(' ')}>
				<button className='cross' onClick={toggleMenu}></button>
				<div className={['mobile-header__content', isOpenMenu ? '__open' : ''].join(' ')}>
					<nav className='mobile-nav'>
						<ul className='nav__list'>
							<li className='nav__element'>
								<a href='#advantages' className='link' onClick={handleLink}>
									{t('Преимущества')}
								</a>
							</li>
							<li className='nav__element'>
								<a href='#tariffs' className='link' onClick={handleLink}>
									{t('Тарифы и цены')}
								</a>
							</li>
							<li className='nav__element'>
								<a href='#faq' className='link' onClick={handleLink}>
									FAQ
								</a>
							</li>
							<li className='nav__element'>
								<a href='#contacts' className='link' onClick={handleLink}>{t('Связаться с нами')}</a>
							</li>
						</ul>
					</nav>
					<div className='__hr' />
					<div className='nav__element'>
						<a href='' className='link' onClick={handleLink}>
							{t('Личный кабинет')}
						</a>
					</div>
					<div className='__hr' />
					<LangSwitcher />
				</div>
			</div>
	</header>
  )
}

export default Header