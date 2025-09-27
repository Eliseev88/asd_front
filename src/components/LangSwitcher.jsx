import { useContext, useState } from "react";
import RU from '../assets/images/ru.png';
import EN from '../assets/images/en.png';
import '../styles/LangSwitcher.scss';
import { useTranslation } from "react-i18next";
import { CollapseContext } from "../providers/CollapseContext";

function LangSwitcher({className}) {

	const {i18n} = useTranslation();

	let _currentLang = localStorage.getItem('i18nextLng');
	let _userLanguage = window.navigator.language;

	if (_currentLang === 'ru-RU' || _currentLang === 'en-EN') {
		if (_userLanguage && _userLanguage !== 'ru-RU') {
			_currentLang = 'EN';
			i18n.changeLanguage(_currentLang.toLowerCase());
		} else {
			_currentLang = 'RU';
		}
	} else {
		_currentLang = _currentLang.toUpperCase();
	}

	const [currentLang, setCurrentLang] = useState(_currentLang);
	const [currentIcon, setCurrentIcon] = useState(_currentLang === 'RU' ? RU : EN);

	const [secondLang, setSecondLang] = useState(_currentLang === 'RU' ? 'EN' : 'RU');
	const [secondIcon, setSecondIcon] = useState(_currentLang === 'RU' ? EN : RU);

	const { isCollapsed, toggleCollapse } = useContext(CollapseContext);

	const changeVisibility = (e) => {
		e.stopPropagation();
		toggleCollapse(!isCollapsed);
	}

	const changeLanguage = (e) => {
		e.stopPropagation();
		if (isCollapsed) return;

		let lang = currentLang === 'RU' ? 'EN' : 'RU';
		setSecondLang(currentLang);
		setCurrentLang(lang);

		let icon = currentLang === 'RU' ? EN : RU;
		setSecondIcon(currentIcon);
		setCurrentIcon(icon);

		i18n.changeLanguage(currentLang === 'RU' ? 'en' : 'ru');

		toggleCollapse(!isCollapsed);
	}

  return (
	<div className={["langSwitcher", className].join(' ')}>
		<div className="langSwitcher__wrp">
			<button className={["langSwitcher__btn", isCollapsed ? '' : '__open'].join(' ')} onClick={changeVisibility}>
				<span className="langSwitcher__element">
					<img src={currentIcon} alt="lang" className="langSwitcher__img"/>
					<span>{currentLang}</span>
				</span>
				<span className={isCollapsed ? '__hr __invisible' : '__hr'}/>
				<span
					onClick={changeLanguage}
					className={['langSwitcher__element', isCollapsed ? '__invisible' : '__visible'].join(' ')}
				>
					<img src={secondIcon} alt="lang" className="langSwitcher__img"/>
					<span>{secondLang}</span>
				</span>
			</button>
		</div>

	</div>
  )
}

export default LangSwitcher