import { useTranslation } from 'react-i18next';
import LOGO from '../assets/icons/logo-footer.svg';
import '../styles/Footer.scss'

function Footer() {
  const {t} = useTranslation();
  return (
	<footer className="footer">
    <div className="wrapper">
      <div className="footer__wrp">
        <div>
          <img src={LOGO} alt="logo" className="footer__logo" />
          <div className="footer__text">
            {t('Хостинг-решения для проектов любой сложности')}.
            <br></br>
            {t('Максимальная производительность и безопасность')}.
          </div>
        </div>
        <div className="footer__column item-a">
          <div className="footer__title">
            {t('Контакты')}
          </div>
          <div className='footer__text __margin'>@asdhere</div>
          <div className='footer__text'>supp@asdhere.net</div>
        </div>
        <div className="footer__column item-b">
          <div className="footer__title">
            {t('Информация')}
          </div>
          <a href="" className="footer__link __margin">{t('Политика конфиденциальности')}</a>
          <br></br>
          <a href="" className="footer__link">{t('Условия обслуживания')}</a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer