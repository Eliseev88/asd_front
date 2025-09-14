import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Button from './Button';
import GE from '../assets/images/ge.png';
import '../styles/Tariffs.scss';
import VirtualServer from './VirtualServer';
import DedicatedServer from './DedicatedServer';


function Tariffs() {
	const {t} = useTranslation();
	
	const [server, setServer] = useState('virtual');

	const changeServer = (serverType) => {
		if (serverType === server) return;

		setServer(serverType);
	}

	return (
		<section className='tariffs' id='tariffs'>
			<div className='tariffs__title'>{t('Тарифы и цены')}</div>
			<div className='tariffs__subtitle'>
				{t('Прозрачное ценообразование, выберете интересующую конфигурацию и')}&nbsp;{t('период')}
			</div>
			<div className="tariffs__btns">
				<button
					className={['tariffs__select-btn', server === 'virtual' ? '__active' : ''].join(' ')}
					onClick={() => changeServer('virtual')}
				>
					{t('Виртуальные серверы')}
				</button>
				<button
					className={['tariffs__select-btn', server === 'dedicated' ? '__active' : ''].join(' ')}
					onClick={() => changeServer('dedicated')}
				>
					{t('Выделенные серверы')}
				</button>
			</div>
			<Button className='tariffs__country-btn'>
				<img src={GE} alt="flag" />
				{t('Германия, Франкфурт (HI-CPU)')}
			</Button>
			<div className="tariffs__wrp">
				{server === 'virtual' ? <VirtualServer /> : <DedicatedServer />}
				<div className="tariffs__element">
					<div className='tariffs__name tariffs__name--ind'>Individual</div>
					<div className='tariffs__describe'>{t('По запросу')}</div>
					<div className="tariffs__additional">
						{t('Не')}&nbsp;{t('нашли необходимую конфигурацию')}?
					</div>
					<Button className="tariffs__custom-btn">{t('Написать')}</Button>
					<div className="tariffs__final">
						{t('Напишите нам, и')}&nbsp;{t('наша команда сделает индивидуальное предложение по')}&nbsp;{t('вашим запросам')}!
					</div>
				</div>
			</div>
			<div className="mobile-tariffs">
				{server === 'virtual' ? <VirtualServer /> : <DedicatedServer />}
				<div>
					<div className={["tariffs__element __mobile", server === 'virtual' ? '__height' : '__height2'].join(' ')}>
						<div className="tariffs__name tariffs__name--ind">Individual</div>
						<div className='tariffs__describe'>{t('По запросу')}</div>
						{server === 'virtual' && <div className='tariffs__info'>
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
						</div>}
						{server === 'dedicated' && <div className='tariffs__info'>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Процессор')}</div>
								<div className="tariffs__text">&mdash;</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Ядра')}</div>
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
								<div className="tariffs__suptitle">{t('Трафик')}</div>
								<div className="tariffs__text">&mdash;</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('ОС')}</div>
								<div className="tariffs__text">&mdash;</div>
							</div>
						</div>}
					</div>
					<div className="mobile-tariffs__wrp __height">
						<div className='mobile-tariffs__name'>{t('Тариф')} <span className='tariffs__name--ind'>Individual</span></div>
						<div className="tariffs__additional">
							{t('Не')}&nbsp;{t('нашли необходимую конфигурацию')}?
						</div>
						<div className="tariffs__final">
							{t('Напишите нам, и')}&nbsp;{t('наша команда сделает индивидуальное предложение по')}&nbsp;{t('вашим запросам')}!
						</div>
						<Button className='tariffs__order-btn'>{t('Оформить заказ')}</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Tariffs