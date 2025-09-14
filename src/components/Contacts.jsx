import { useTranslation } from 'react-i18next';
import Button from './Button';
import '../styles/Contacts.scss';

function Contacts() {
	const {t} = useTranslation();
  return (
	<section className='contacts' id="contacts">
		<div className='contacts__title'>{t('Связаться')}</div>
		<div className='contacts__subtitle'>
			{t('Остались вопросы')}?
		</div>
		<div className="contacts__wrp">
			<div className='contacts__info'>
				{t('Заполните форму и')}&nbsp;{t('мы')}&nbsp;{t('обязательно ответим')}!
			</div>
			<form action="" className='contacts__form'>
				<input
					type="text"
					className="contacts__input"
					placeholder={t('Ваш Email или Telegram')}
					required
				/>
				<textarea
					name=""
					id=""
					className="contacts__textaria"
					placeholder={t('Ваш вопрос')}
					required
				/>

				<Button type='submit' className="contacts__submit">{t('Отправить')}</Button>
			</form>
		</div>
		<div className="contacts__wrp">
			<div className='contacts__text'>
				{t('Вы')}&nbsp;{t('всегда можете связаться с')}&nbsp;{t('нами в')}&nbsp;
				{t('Telegram или написать на')}&nbsp;{t('электронную почту')}!
			</div>
			<div className="contacts__social">
				<div className='contacts__element'>
					<a className='contacts__tg' href="tg://resolve?domain=asdhere" target='blank'/>
					<span>@asdhere</span>
				</div>
				<div className='contacts__element'>
					<a className='contacts__mail' href="mailto:support@asdhere.net"/>
					<span>support@asdhere.net</span>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Contacts