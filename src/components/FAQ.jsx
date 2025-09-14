import { useTranslation } from 'react-i18next';
import '../styles/FAQ.scss';

function FAQ() {
	const {t} = useTranslation();
  return (
	<section className='faq' id='faq'>
		<div className='faq__title'>FAQ</div>
		<div className='faq__subtitle'>
			{t('Найдите ответы на')}&nbsp;{t('самые распространенные вопросы')}
		</div>
		<div className="faq__wrp">
			<div className="faq__question faq__question--var1">
				{t('Помогаете')}&nbsp;{t('ли вы')}&nbsp;{t('с')}&nbsp;{t('переносом проектов')}?
			</div>
			<div className="faq__answer">
				{t('Да, наши специалисты перенесут ваш сайт или проект на')}&nbsp;{t('наши серверы. Для уточнения деталей напишите нам в')}&nbsp;
				{t('чат или на')}&nbsp;{t('почту')}&nbsp;&mdash; {t('обеспечим плавный переход без простоев')}.
			</div>
		</div>
		<div className="faq__wrp">
			<div className="faq__question faq__question--var2">
				{t('Какие методы оплаты доступны')}?
			</div>
			<div className="faq__answer">
				{t('Мы')}&nbsp;{t('принимаем оплату криптовалютой. Напишите нам, мы')}&nbsp;{t('поможем разобраться, если нужна помощь')}.
			</div>
		</div>
		<div className="faq__wrp">
			<div className="faq__question faq__question--var3">
				{t('Какой тип виртуализации вы')}&nbsp;{t('используете')}?
			</div>
			<div className="faq__answer">
				{t('Мы')}&nbsp;{t('используем')} KVM. {t('С')}&nbsp;{t('таким типом серверы полностью изолированы на')}&nbsp;
				{t('уровне железа')}, <br></br>{t('как отдельный физический компьютер: соседи не')}&nbsp;
				{t('смогут получить доступ к')}&nbsp;{t('вашим данным или')} &laquo;{t('отобрать')}&raquo; {t('ресурсы. Вы')}&nbsp;
				{t('получаете гарантированные мощности и')}&nbsp;{t('можете ставить любую')}&nbsp;{t('ОС')}.
			</div>
		</div>
		<div className="faq__wrp">
			<div className="faq__question faq__question--var4">
				{t('Как долго активируется услуга')}?
			</div>
			<div className="faq__answer">
				{t('Сроки зависят от')}&nbsp;{t('типа услуги. Виртуальные')}&nbsp;&mdash; &nbsp;{t('в среднем, за')}&nbsp;30&nbsp;{t('секунд, но в')}&nbsp;
				{t('некоторых случаях до')}&nbsp;5&nbsp;{t('минут. Выделенные серверы')}&nbsp;&mdash; {t('до')}&nbsp;72&nbsp;{t('часов (требуется физическая подготовка оборудования). Вы')}&nbsp;
				{t('получите уведомление сразу после активации')}.
			</div>
		</div>
		<div className="faq__wrp">
			<div className="faq__question faq__question--var5">
				{t('Есть')}&nbsp;{t('ли возможность возврата средств')}?
			</div>
			<div className="faq__answer">
				{t('Да, в')}&nbsp;{t('течение')} 14&nbsp;{t('дней после оплаты вы')}&nbsp;{t('можете запросить полный возврат средств')},<br></br> 
				{t('если услуги не')}&nbsp;{t('соответствуют вашим ожиданиям. Возврат осуществляется согласно условиям, указанным в')}&nbsp;
				{t('договоре об')}&nbsp;{t('оказании услуг')}.
			</div>
		</div>
	</section>
  )
}

export default FAQ