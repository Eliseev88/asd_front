import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Button from './Button';
import GE from '../assets/images/ge.png';
import '../styles/Tariffs.scss';
import VirtualServer from './VirtualServer';
import DedicatedServer from './DedicatedServer';
import { declension } from '../utils/declension';
import { VIRTUAL, DEDICATED } from '../data/tarrifs';

function Tariffs() {
	const {t} = useTranslation();
	
	const [server, setServer] = useState('virtual');

	const [tariff, setTariff] = useState(VIRTUAL.DE1);

	const changeVirtualTariff = (tariffName) => {
		setTariff(VIRTUAL[tariffName]);
	}
	const changeDedicatedTariff = (tariffName) => {
		setTariff(DEDICATED[tariffName]);
	}

	const changeServer = (serverType) => {
		if (serverType === server) return;
		setServer(serverType);
	}

	useEffect(() => {
		setTariff(server === 'virtual' ? VIRTUAL.DE1 : DEDICATED.Gbps1);
	}, [server]);

	useEffect(() => {
		setTariff(server === 'virtual' ? VIRTUAL.DE1 : DEDICATED.Gbps1);
	}, []);

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
			{/* <div className="mobile-tariffs">
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
			</div> */}
			<div className="mobile-tariffs">
				{server === 'virtual' && <div className='mobile-tariffs__scroll'>
					<div className={["tariffs__element __mobile", tariff.name === 'DE1' ? '__active' : ''].join(' ')} onClick={() => changeVirtualTariff('DE1')}>
						<div className="tariffs__name tariffs__name--var1">DE1</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;4,8&nbsp;{t('в месяц при оплате')} 12&nbsp;{t('месяцев')}
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
					<div className={["tariffs__element __mobile", tariff.name === 'DE2' ? '__active' : ''].join(' ')} onClick={() => changeVirtualTariff('DE2')}>
						<div className="tariffs__name tariffs__name--var2">DE2</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;8,8&nbsp;{t('в месяц при оплате')} 12&nbsp;{t('месяцев')}
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
					<div className={["tariffs__element __mobile", tariff.name === 'DE3' ? '__active' : ''].join(' ')} onClick={() => changeVirtualTariff('DE3')}>
						<div className="tariffs__name tariffs__name--var3">DE3</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;16,8&nbsp;{t('в месяц при оплате')} 12&nbsp;{t('месяцев')}
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
					<div className={["tariffs__element __mobile", tariff.name === 'DE4' ? '__active' : ''].join(' ')} onClick={() => changeVirtualTariff('DE4')}>
						<div className="tariffs__name tariffs__name--var4">DE4</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;34,4&nbsp;{t('в месяц при оплате')} 12&nbsp;{t('месяцев')}
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
					<div className={["tariffs__element __mobile", tariff.name === 'DE5' ? '__active' : ''].join(' ')} onClick={() => changeVirtualTariff('DE5')}>
						<div className="tariffs__name tariffs__name--var5">DE5</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;68&nbsp;{t('в месяц при оплате')} 12&nbsp;{t('месяцев')}
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
				</div>}
				{server === 'dedicated' && <div className='mobile-tariffs__scroll'>
					<div className={["tariffs__element __mobile", tariff.name === '1 Gbps' ? '__active' : ''].join(' ')} onClick={() => changeDedicatedTariff('Gbps1')}>
						<div className="tariffs__name tariffs__name--var1">1 Gbps</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;320&nbsp;{t('в месяц при оплате')} 12&nbsp;{t('месяцев')}
						</div>
						<div className='tariffs__info'>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Процессор')}</div>
								<div className="tariffs__text">AMD Ryzen9 9950X</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Ядра')}</div>
								<div className="tariffs__text">16 Cores</div>
								<div className="tariffs__text">32 Threads @ 5.7GHz</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Память')}</div>
								<div className="tariffs__text">192 GB DDR5</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Хранилище')}</div>
								<div className="tariffs__text">2 x 4TB NVMe</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Трафик')}</div>
								<div className="tariffs__text">Unmetered @ 1Gbps</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('ОС')}</div>
								<div className="tariffs__text">Linux / Windows</div>
							</div>
						</div>
					</div>
					<div className={["tariffs__element __mobile", tariff.name === '10 Gbps' ? '__active' : ''].join(' ')} onClick={() => changeDedicatedTariff('Gbps10')}>
						<div className="tariffs__name tariffs__name--var2">10 Gbps</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;1280&nbsp;{t('в месяц при оплате')} 12&nbsp;{t('месяцев')}
						</div>
						<div className='tariffs__info'>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Процессор')}</div>
								<div className="tariffs__text">AMD Ryzen9 9950X</div>
							</div>
							<div className="tariffs__box">
							<div className="tariffs__suptitle">{t('Ядра')}</div>
								<div className="tariffs__text">16 Cores</div>
								<div className="tariffs__text">32 Threads @ 5.7GHz</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Память')}</div>
								<div className="tariffs__text">192 GB DDR5</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Хранилище')}</div>
								<div className="tariffs__text">2 x 4TB NVMe</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Трафик')}</div>
								<div className="tariffs__text">Unmetered @ 10Gbps</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('ОС')}</div>
								<div className="tariffs__text">Linux / Windows</div>
							</div>
						</div>
					</div>
					<div className={["tariffs__element __mobile", tariff.name === '25 Gbps' ? '__active' : ''].join(' ')} onClick={() => changeDedicatedTariff('Gbps25')}>
						<div className="tariffs__name tariffs__name--var3">25 Gbps</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;2400&nbsp;{t('в месяц при оплате')} 12&nbsp;{t('месяцев')}
						</div>
						<div className='tariffs__info'>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Процессор')}</div>
								<div className="tariffs__text">AMD Ryzen9 9950X</div>
							</div>
							<div className="tariffs__box">
							<div className="tariffs__suptitle">{t('Ядра')}</div>
								<div className="tariffs__text">16 Cores</div>
								<div className="tariffs__text">32 Threads @ 5.7GHz</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Память')}</div>
								<div className="tariffs__text">192 GB DDR5</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Хранилище')}</div>
								<div className="tariffs__text">2 x 4TB NVMe</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Трафик')}</div>
								<div className="tariffs__text">Unmetered @ 25Gbps</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('ОС')}</div>
								<div className="tariffs__text">Linux / Windows</div>
							</div>
						</div>
					</div>
					<div className={["tariffs__element __mobile", tariff.name === '40 Gbps' ? '__active' : ''].join(' ')} onClick={() => changeDedicatedTariff('Gbps40')}>
						<div className="tariffs__name tariffs__name--var4">40 Gbps</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;3200&nbsp;{t('в месяц при оплате')} 12&nbsp;{t('месяцев')}
						</div>
						<div className='tariffs__info'>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Процессор')}</div>
								<div className="tariffs__text">AMD Ryzen9 9950X</div>
							</div>
							<div className="tariffs__box">
							<div className="tariffs__suptitle">{t('Ядра')}</div>
								<div className="tariffs__text">16 Cores</div>
								<div className="tariffs__text">32 Threads @ 5.7GHz</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Память')}</div>
								<div className="tariffs__text">192 GB DDR5</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Хранилище')}</div>
								<div className="tariffs__text">2 x 4TB NVMe</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Трафик')}</div>
								<div className="tariffs__text">Unmetered @ 40Gbps</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('ОС')}</div>
								<div className="tariffs__text">Linux / Windows</div>
							</div>
						</div>
					</div>
					<div className={["tariffs__element __mobile", tariff.name === '100 Gbps' ? '__active' : ''].join(' ')} onClick={() => changeDedicatedTariff('Gbps100')}>
						<div className="tariffs__name tariffs__name--var5">100 Gbps</div>
						<div className='tariffs__discount'>
							&#8364;&nbsp;6400&nbsp;{t('в месяц при оплате')} 12&nbsp;{t('месяцев')}
						</div>
						<div className='tariffs__info'>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Процессор')}</div>
								<div className="tariffs__text">AMD Ryzen9 9950X</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Ядра')}</div>
								<div className="tariffs__text">16 Cores</div>
								<div className="tariffs__text">32 Threads @ 5.7GHz</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Память')}</div>
								<div className="tariffs__text">192 GB DDR5</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Хранилище')}</div>
								<div className="tariffs__text">2 x 4TB NVMe</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('Трафик')}</div>
								<div className="tariffs__text">Unmetered @ 100Gbps</div>
							</div>
							<div className="tariffs__box">
								<div className="tariffs__suptitle">{t('ОС')}</div>
								<div className="tariffs__text">Linux / Windows</div>
							</div>
						</div>
					</div>
				</div>}
				<div className="mobile-tariffs__wrp">
					<div className='mobile-tariffs__name'>{t('Тариф')} <span className={tariff.class}>{tariff.name}</span></div>
					<div>
						<div className="mobile-tariffs__price">
						<div className='mobile-tariffs__month'>{t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}</div>
						<div className='mobile-tariffs__cost'>
							<div className="selector__element">
							<span>&#8364;</span>
							<span>{tariff.one}</span>
							</div>
						</div>
						</div>
						<div className="mobile-tariffs__price">
						<div className='mobile-tariffs__month'>{t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}</div>
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
						<div className="mobile-tariffs__price">
						<div className='mobile-tariffs__month'>{t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}</div>
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
						<div className="mobile-tariffs__price">
						<div className='mobile-tariffs__month'>{t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}</div>
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
					</div>
					<Button className='tariffs__order-btn'>{t('Оформить заказ')}</Button>
				</div>
			</div>
		</section>
	)
}

export default Tariffs