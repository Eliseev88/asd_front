import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Button from './Button';
import GE from '../assets/images/ge.png';
import FN from '../assets/images/fn.png';
import '../styles/Tariffs.scss';
import GermanyServer from './GermanyServer';
import FinlandServer from './FinlandServer';
import { declension } from '../utils/declension';
import { GERMANY, FINLAND, TARIFF_LINKS } from '../data/tarrifs';

function Tariffs() {
	const {t} = useTranslation();

	const [country, setCountry] = useState('germany');
	const [amdType, setAMD] = useState('EPYC');
	const [tariff, setTariff] = useState(GERMANY.EPYC.DE1);
	const [month, setMonth] = useState(1);

	const changeGermanyTariff = (tariffName) => {
		setTariff(GERMANY[amdType][tariffName]);
	}
	const changeFinlandTariff = (tariffName) => {
		setTariff(FINLAND[tariffName]);
	}

	const changeCountry = (sCountry) => {
		if (sCountry === country) return;
		setCountry(sCountry);
	}

	const changeAMDType = (sAMDType) => {
		if (amdType === sAMDType) return;
		setAMD(sAMDType);
	}

	const handleClickTariff = () => {
		window.open(TARIFF_LINKS[tariff.full_name + month], '_blank');
	}

	const handleClick = () => {
		const element = document.getElementById("contacts");
		const startPosition = window.scrollY;
		const targetPosition = element.getBoundingClientRect().top + window.scrollY - 75;
		const distance = targetPosition - startPosition;
		let startTime = null;

		function animation(currentTime) {
			if (startTime === null) startTime = currentTime;

			const timeElapsed = currentTime - startTime;
			const run = easeInOutQuad(timeElapsed, startPosition, distance, 200);

			window.scrollTo(0, run);

			if (timeElapsed < 200) {
				requestAnimationFrame(animation);
			}
		}

		function easeInOutQuad(t, b, c, d) {
			t /= d / 2;

			if (t < 1) return (c / 2) * t * t + b;

			t--;

			return (-c / 2) * (t * (t - 2) - 1) + b;
		}

		requestAnimationFrame(animation);
	};

	useEffect(() => {
		if (country === 'germany') {
			setTariff(GERMANY[amdType].DE1);
		} else {
			setTariff(FINLAND['[FI] EP-1']);
		}
	}, [country, amdType]);

	return (
		<section className='tariffs' id='tariffs'>
			<div className='tariffs__title'>{t('Тарифы и цены')}</div>
			<div className='tariffs__subtitle'>
				{t('Прозрачное ценообразование, выберете интересующую конфигурацию и')}&nbsp;{t('период')}
			</div>
			<div className="tariffs__btns">
				<button
					className={['tariffs__select-btn', country === 'germany' ? '__active' : ''].join(' ')}
					onClick={() => changeCountry('germany')}
				>
					<img src={GE} alt="flag" />
					{t('Германия, Франкфурт')}
				</button>
				<button
					className={['tariffs__select-btn', country === 'finland' ? '__active' : ''].join(' ')}
					onClick={() => changeCountry('finland')}
				>
					<img src={FN} alt="flag" className='tariffs__flag-icon' />
					{t('Финляндия, Хельсинки')}
				</button>
			</div>
			{country === 'germany' && <div className="tariffs__btns tariffs__btns--sub">
				<button
					className={['tariffs__select-btn', amdType === 'EPYC' ? '__active' : ''].join(' ')}
					onClick={() => changeAMDType('EPYC')}
				>
					AMD EPYC 9454
				</button>
				<button
					className={['tariffs__select-btn', amdType === 'Ryzen' ? '__active' : ''].join(' ')}
					onClick={() => changeAMDType('Ryzen')}
				>
					AMD Ryzen 9 9950X
				</button>
			</div>}
			{country === 'finland' && <Button className='tariffs__country-btn' disabled>AMD EPYC 9454</Button>}
			<div className="tariffs__wrp">
				{country === 'germany' ? <GermanyServer amd={amdType} /> : <FinlandServer />}
				<div className="tariffs__element">
					<div className='tariffs__name tariffs__name--ind'>Individual</div>
					<div className='tariffs__describe'>{t('По запросу')}</div>
					<div className="tariffs__additional">
						{t('Не')}&nbsp;{t('нашли необходимую конфигурацию')}?
					</div>
					<Button className="tariffs__custom-btn" onClick={handleClick}>{t('Написать')}</Button>
					<div className="tariffs__final">
						{t('Напишите нам, и')}&nbsp;{t('наша команда сделает индивидуальное предложение по')}&nbsp;{t('вашим запросам')}!
					</div>
				</div>
			</div>



			{/* MOBILE */}
			<div className="mobile-tariffs">
				{country === 'germany' && <div className='mobile-tariffs__scroll'>
					<div className={["tariffs__element __mobile", tariff.code === 'DE1' ? '__active' : ''].join(' ')} onClick={() => changeGermanyTariff('DE1')}>
						<div className="tariffs__name tariffs__name--var1">{GERMANY[amdType].DE1.name}</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;{GERMANY[amdType].DE1.discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
						</div>
						<div className='tariffs__info'>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Процессор')}</div>
								<div className="tariffs__text">AMD Ryzen9 9950X 5.7GHz</div>
								<div className="tariffs__text">1&nbsp;vCPU</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Память')}</div>
								<div className="tariffs__text">2GB DDR5</div>
							</div>
								<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Хранилище')}</div>
								<div className="tariffs__text">30GB NVMe</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Скорость порта')}</div>
								<div className="tariffs__text">10Gbps</div>
							</div>
						</div>
					</div>
					<div className={["tariffs__element __mobile", tariff.code === 'DE2' ? '__active' : ''].join(' ')} onClick={() => changeGermanyTariff('DE2')}>
						<div className="tariffs__name tariffs__name--var2">{GERMANY[amdType].DE2.name}</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;{GERMANY[amdType].DE2.discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
						</div>
						<div className='tariffs__info'>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Процессор')}</div>
								<div className="tariffs__text">AMD Ryzen9 9950X 5.7GHz</div>
								<div className="tariffs__text">2&nbsp;vCPU</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Память')}</div>
								<div className="tariffs__text">4GB DDR5</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Хранилище')}</div>
								<div className="tariffs__text">60GB NVMe</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Скорость порта')}</div>
								<div className="tariffs__text">10Gbps</div>
							</div>
						</div>
					</div>
					<div className={["tariffs__element __mobile", tariff.code === 'DE3' ? '__active' : ''].join(' ')} onClick={() => changeGermanyTariff('DE3')}>
						<div className="tariffs__name tariffs__name--var3">{GERMANY[amdType].DE3.name}</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;{GERMANY[amdType].DE3.discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
						</div>
						<div className='tariffs__info'>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Процессор')}</div>
								<div className="tariffs__text">AMD Ryzen9 9950X 5.7GHz</div>
								<div className="tariffs__text">4&nbsp;vCPU</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Память')}</div>
								<div className="tariffs__text">8GB DDR5</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Хранилище')}</div>
								<div className="tariffs__text">120GB NVMe</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Скорость порта')}</div>
								<div className="tariffs__text">10Gbps</div>
							</div>
						</div>
					</div>
					<div className={["tariffs__element __mobile", tariff.code === 'DE4' ? '__active' : ''].join(' ')} onClick={() => changeGermanyTariff('DE4')}>
						<div className="tariffs__name tariffs__name--var4">{GERMANY[amdType].DE4.name}</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;{GERMANY[amdType].DE4.discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
						</div>
						<div className='tariffs__info'>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Процессор')}</div>
								<div className="tariffs__text">AMD Ryzen9 9950X 5.7GHz</div>
								<div className="tariffs__text">8&nbsp;vCPU</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Память')}</div>
								<div className="tariffs__text">16GB DDR5</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Хранилище')}</div>
								<div className="tariffs__text">240GB NVMe</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Скорость порта')}</div>
								<div className="tariffs__text">10Gbps</div>
							</div>
						</div>
					</div>
					<div className={["tariffs__element __mobile", tariff.code === 'DE5' ? '__active' : ''].join(' ')} onClick={() => changeGermanyTariff('DE5')}>
						<div className="tariffs__name tariffs__name--var5">{GERMANY[amdType].DE5.name}</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;{GERMANY[amdType].DE5.discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
						</div>
						<div className='tariffs__info'>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Процессор')}</div>
								<div className="tariffs__text">AMD Ryzen9 9950X 5.7GHz</div>
								<div className="tariffs__text">16&nbsp;vCPU</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Память')}</div>
								<div className="tariffs__text">32GB DDR5</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Хранилище')}</div>
								<div className="tariffs__text">480GB NVMe</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Скорость порта')}</div>
								<div className="tariffs__text">10Gbps</div>
							</div>
						</div>
					</div>
					<div className={["tariffs__element __mobile", tariff.name === 'Individual' ? '__active' : ''].join(' ')} onClick={() => changeGermanyTariff('IND')}>
						<div className="tariffs__name tariffs__name--ind">Individual</div>
						<div className='tariffs__describe'>{t('По запросу')}</div>
						<div className='tariffs__info'>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Процессор')}</div>
								<div className="tariffs__text">&mdash;</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Память')}</div>
								<div className="tariffs__text">&mdash;</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Хранилище')}</div>
								<div className="tariffs__text">&mdash;</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Скорость порта')}</div>
								<div className="tariffs__text">&mdash;</div>
							</div>
						</div>
					</div>
				</div>}
				{country === 'finland' && <div className='mobile-tariffs__scroll'>
					<div className={["tariffs__element __mobile", tariff.name === 'EP-1' ? '__active' : ''].join(' ')} onClick={() => changeFinlandTariff('[FI] EP-1')}>
						<div className="tariffs__name tariffs__name--var1">{FINLAND['[FI] EP-1'].name}</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;{FINLAND['[FI] EP-1'].discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
						</div>
						<div className='tariffs__info'>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Процессор')}</div>
								<div className="tariffs__text">AMD EPYC 9454</div>
								<div className="tariffs__text">1&nbsp;vCPU</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Память')}</div>
								<div className="tariffs__text">2GB DDR5</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Хранилище')}</div>
								<div className="tariffs__text">30GB NVMe</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Скорость порта')}</div>
								<div className="tariffs__text">10Gbps</div>
							</div>
						</div>
					</div>
					<div className={["tariffs__element __mobile", tariff.name === 'EP-2' ? '__active' : ''].join(' ')} onClick={() => changeFinlandTariff('[FI] EP-2')}>
						<div className="tariffs__name tariffs__name--var2">{FINLAND['[FI] EP-2'].name}</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;{FINLAND['[FI] EP-2'].discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
						</div>
						<div className='tariffs__info'>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Процессор')}</div>
								<div className="tariffs__text">AMD EPYC 9454</div>
								<div className="tariffs__text">2&nbsp;vCPU</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Память')}</div>
								<div className="tariffs__text">4GB DDR5</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Хранилище')}</div>
								<div className="tariffs__text">60GB NVMe</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Скорость порта')}</div>
								<div className="tariffs__text">10Gbps</div>
							</div>
						</div>
					</div>
					<div className={["tariffs__element __mobile", tariff.name === 'EP-3' ? '__active' : ''].join(' ')} onClick={() => changeFinlandTariff('[FI] EP-3')}>
						<div className="tariffs__name tariffs__name--var3">{FINLAND['[FI] EP-3'].name}</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;{FINLAND['[FI] EP-3'].discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
						</div>
						<div className='tariffs__info'>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Процессор')}</div>
								<div className="tariffs__text">AMD EPYC 9454</div>
								<div className="tariffs__text">4&nbsp;vCPU</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Память')}</div>
								<div className="tariffs__text">8GB DDR5</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Хранилище')}</div>
								<div className="tariffs__text">120GB NVMe</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Скорость порта')}</div>
								<div className="tariffs__text">10Gbps</div>
							</div>
						</div>
					</div>
					<div className={["tariffs__element __mobile", tariff.name === 'EP-4' ? '__active' : ''].join(' ')} onClick={() => changeFinlandTariff('[FI] EP-4')}>
						<div className="tariffs__name tariffs__name--var4">{FINLAND['[FI] EP-4'].name}</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;{FINLAND['[FI] EP-4'].discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
						</div>
						<div className='tariffs__info'>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Процессор')}</div>
								<div className="tariffs__text">AMD EPYC 9454</div>
								<div className="tariffs__text">8&nbsp;vCPU</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Память')}</div>
								<div className="tariffs__text">16GB DDR5</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Хранилище')}</div>
								<div className="tariffs__text">240GB NVMe</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Скорость порта')}</div>
								<div className="tariffs__text">10Gbps</div>
							</div>
						</div>
					</div>
					<div className={["tariffs__element __mobile", tariff.name === 'EP-5' ? '__active' : ''].join(' ')} onClick={() => changeFinlandTariff('[FI] EP-5')}>
						<div className="tariffs__name tariffs__name--var5">{FINLAND['[FI] EP-5'].name}</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;{FINLAND['[FI] EP-5'].discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
						</div>
						<div className='tariffs__info'>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Процессор')}</div>
								<div className="tariffs__text">AMD EPYC 9454</div>
								<div className="tariffs__text">16&nbsp;vCPU</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Память')}</div>
								<div className="tariffs__text">32GB DDR5</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Хранилище')}</div>
								<div className="tariffs__text">480GB NVMe</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Скорость порта')}</div>
								<div className="tariffs__text">10Gbps</div>
							</div>
						</div>
					</div>
					<div className={["tariffs__element __mobile", tariff.name === 'Individual' ? '__active' : ''].join(' ')} onClick={() => changeFinlandTariff('IND')}>
						<div className="tariffs__name tariffs__name--ind">Individual</div>
						<div className='tariffs__describe'>{t('По запросу')}</div>
						<div className='tariffs__info'>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Процессор')}</div>
								<div className="tariffs__text">&mdash;</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Память')}</div>
								<div className="tariffs__text">&mdash;</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Хранилище')}</div>
								<div className="tariffs__text">&mdash;</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Скорость порта')}</div>
								<div className="tariffs__text">&mdash;</div>
							</div>
						</div>
					</div>
				</div>}
				<div className="mobile-tariffs__wrp">
					<div className='mobile-tariffs__name'>{t('Тариф')} <span className={tariff.class}>{tariff.name}</span></div>
					{tariff.name !== 'Individual' && <div>
						<div className="mobile-tariffs__price" onClick={() => setMonth(1)}>
							<div className='mobile-tariffs__item'>
								<div className={['mobile-tariffs__cercle', month === 1 ? '__active' : ''].join(' ')}></div>
								<div className='mobile-tariffs__month'>{t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}</div>
							</div>
							<div className='mobile-tariffs__cost'>
								<div className="selector__element">
									<span>&#8364;</span>
									<span>{tariff.one}</span>
								</div>
							</div>
						</div>
						<div className="mobile-tariffs__price" onClick={() => setMonth(3)}>
							<div className='mobile-tariffs__item'>
								<div className={['mobile-tariffs__cercle', month === 3 ? '__active' : ''].join(' ')}></div>
								<div className='mobile-tariffs__month'>{t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}</div>
							</div>
							<div className='mobile-tariffs__cost'>
								<div className="selector__old-price">
									<span>&#8364;</span>
									<span>{tariff.three.old}</span>
								</div>
								<div className="selector__element">
									<span>&#8364;</span>
									<span>{tariff.three.new}</span>
								</div>
							</div>
						</div>
						<div className="mobile-tariffs__price" onClick={() => setMonth(6)}>
							<div className='mobile-tariffs__item'>
								<div className={['mobile-tariffs__cercle', month === 6 ? '__active' : ''].join(' ')}></div>
								<div className='mobile-tariffs__month'>{t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}</div>
							</div>
							<div className='mobile-tariffs__cost'>
								<div className="selector__old-price">
									<span>&#8364;</span>
									<span>{tariff.six.old}</span>
								</div>
								<div className="selector__element">
									<span>&#8364;</span>
									<span>{tariff.six.new}</span>
								</div>
							</div>
						</div>
						<div className="mobile-tariffs__price" onClick={() => setMonth(12)}>
							<div className='mobile-tariffs__item'>
								<div className={['mobile-tariffs__cercle', month === 12 ? '__active' : ''].join(' ')}></div>
								<div className='mobile-tariffs__month'>{t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}</div>
							</div>
							<div className='mobile-tariffs__cost'>
								<div className="selector__old-price">
									<span>&#8364;</span>
									<span>{tariff.twelve.old}</span>
								</div>
								<div className="selector__element">
									<span>&#8364;</span>
									<span>{tariff.twelve.new}</span>
								</div>
							</div>
						</div>
					</div>}
					{tariff.name === 'Individual' && <><div className="tariffs__additional">
							{t('Не')}&nbsp;{t('нашли необходимую конфигурацию')}?
						</div>
						<div className="tariffs__final">
							{t('Напишите нам, и')}&nbsp;{t('наша команда сделает индивидуальное предложение по')}&nbsp;{t('вашим запросам')}!
						</div></>}
					<Button className='tariffs__order-btn' onClick={tariff.name === 'Individual' ? handleClick : handleClickTariff}>
						{tariff.name === 'Individual' ? t('Написать') : t('Оформить заказ')}
					</Button>
				</div>
			</div>
		</section>
	)
}

export default Tariffs