import { useTranslation } from 'react-i18next';
import '../styles/Advantages.scss';

function Advantages() {
	const {t} = useTranslation();
  return (
	<section className='advantages' id='advantages'>
		<div className='advantages__title'>{t('Преимущества')}</div>
		<div className='advantages__subtitle'>{t('Когда важна каждая деталь')}</div>
		<div className="advantages__wrp">
			<div className="advantages__block advantages__block--vector1">
				<div className='advantages__suptitle advantages__suptitle--var1'>
					{t('Высокая скорость до')}&nbsp;25&nbsp;{t('Гбит/с')}
				</div>
				<div className="advantages__text">
					{t('Серверы на')}&nbsp;AMD Ryzen 9&nbsp;и&nbsp;NVMe-{t('дисках обеспечивают ')}
					<span className='advantages__text--var1'>{t('мгновенную обработку')}</span> {t('запросов и')}&nbsp;{t('плавную работу проектов')}.
				</div>
			</div>
			<div className="advantages__block advantages__block--vector2">
				<div className='advantages__suptitle advantages__suptitle--var2'>
					{t('Готовые решения в')}&nbsp;{t('один клик, под ваши задачи')}
				</div>
				<div className="advantages__text">
					{t('Экономьте часы на')}&nbsp;{t('настройке')}: WordPress, {t('игровые серверы')}, VPN {t('и')}&nbsp;{t('другие популярные системы')}
					<br></br><span className='advantages__text--var2'>{t('уже настроены и')}&nbsp;{t('оптимизированы')}.</span>
				</div>
			</div>
			<div className="advantages__block advantages__block--vector3 advantages__block--edition">
				<div className='advantages__suptitle advantages__suptitle--var3'>
					{t('Гарантированные мощности без оверселлинга')}
				</div>
				<div className="advantages__text">
					{t('Мы')}&nbsp;{t('резервируем для вас реальные ресурсы CPU и RAM')}&nbsp;&mdash; <span className='advantages__text--var3'>{t('никакого совместного использования')}</span>&nbsp;{t('c')}&nbsp;{t('другими пользователями')}.
				</div>
			</div>
			<div className="advantages__block advantages__block--vector4">
				<div className='advantages__suptitle advantages__suptitle--var4'>
					{t('Круглосуточная поддержка без роботов')}
				</div>
				<div className="advantages__text">
					{t('Наши специалисты отвечают за')}&nbsp;15&nbsp;{t('минут и')}&nbsp;
					<span className='advantages__text--var4'>{t('объяснят всё человеческим языком')}</span>&nbsp;<br></br>&mdash; {t('даже если вы')}&nbsp;{t('новичок')} {t('в')}&nbsp;{t('серверах')}.
				</div>
			</div>
		</div>
	</section>
  );
}

export default Advantages