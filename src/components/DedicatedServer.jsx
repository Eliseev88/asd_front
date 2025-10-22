import { TariffContext } from '../providers/TariffContext';
import { TARIFF_OBJ, DEDICATED } from '../data/tarrifs';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { declension } from '../utils/declension';
import Button from './Button';

function DedicatedServer() {
	const {t} = useTranslation();

	const { tariffObject, changeTariffCollapse } = useContext(TariffContext);

  const [ gbps1, setGbps1 ] = useState({
    month: 1,
    price: DEDICATED.Gbps1.one
  });
  const [ gbps10, setGbps10 ] = useState({
    month: 1,
    price: DEDICATED.Gbps10.one
  });
  const [ gbps25, setGbps25 ] = useState({
    month: 1,
    price: DEDICATED.Gbps25.one
  });
  const [ gbps40, setGbps40] = useState({
    month: 1,
    price: DEDICATED.Gbps40.one
  });
  const [ gbps100, setGbps100 ] = useState({
    month: 1,
    price: DEDICATED.Gbps100.one
  });

	const changeVisibility = (e, tariffName) => {
		e.stopPropagation();
		changeTariffCollapse({...TARIFF_OBJ, [tariffName]: !tariffObject[tariffName]});
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

  return (
    <>
      {/* Gbps1 */}
      <div className="tariffs__element">
        <div className="tariffs__name tariffs__name--var1">1 Gbps</div>
        <div className="tariffs__display">
          <div className="tariffs__price">
            <span className="tariffs__symbol">&#8364;</span>
            <span>{gbps1.price}</span>
          </div>
          <div
            role="button"
            className={["selector", !tariffObject["Gbps1"] ? "__open" : ""].join(" ")}
            onClick={(e) => changeVisibility(e, "Gbps1")}
          >
            <div className="selector__month">{t(declension('%d %s', gbps1.month, ['месяц', 'месяца', 'месяцев']))}</div>

            {/* GRID */}
            <div className="selector__grid">

              {/* 1-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps1({price: DEDICATED.Gbps1.one, month: 1})}>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{DEDICATED.Gbps1.one}</span>
                </div>
                <div className="selector__element"></div>
                <div className="selector__element ">
                  {t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 2-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps1({price: DEDICATED.Gbps1.three.new, month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{DEDICATED.Gbps1.three.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{DEDICATED.Gbps1.three.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps1({price: DEDICATED.Gbps1.six.new, month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{DEDICATED.Gbps1.six.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{DEDICATED.Gbps1.six.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps1({price: DEDICATED.Gbps1.twelve.new, month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{DEDICATED.Gbps1.twelve.new}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{DEDICATED.Gbps1.twelve.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;{DEDICATED.Gbps1.discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={handleClick}>{t('Оформить заказ')}</Button>
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


      {/* Gbps10 */}
      <div className="tariffs__element">
        <div className="tariffs__name tariffs__name--var2">10 Gbps</div>
        <div className="tariffs__display">
          <div className="tariffs__price">
            <span className="tariffs__symbol">&#8364;</span>
            <span>{gbps10.price}</span>
          </div>
          <div
            role="button"
            className={["selector", !tariffObject["Gbps10"] ? "__open" : ""].join(" ")}
            onClick={(e) => changeVisibility(e, "Gbps10")}
          >
            <div className="selector__month">{t(declension('%d %s', gbps10.month, ['месяц', 'месяца', 'месяцев']))}</div>

            {/* GRID */}
            <div className="selector__grid">

              {/* 1-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps10({price: DEDICATED.Gbps10.one, month: 1})}>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{DEDICATED.Gbps10.one}</span>
                </div>
                <div className="selector__element"></div>
                <div className="selector__element ">
                  {t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 2-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps10({price: DEDICATED.Gbps10.three.new, month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{DEDICATED.Gbps10.three.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{DEDICATED.Gbps10.three.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps10({price: DEDICATED.Gbps10.six.new, month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{DEDICATED.Gbps10.six.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{DEDICATED.Gbps10.six.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps10({price: DEDICATED.Gbps10.twelve.new, month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{DEDICATED.Gbps10.twelve.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{DEDICATED.Gbps10.twelve.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;{DEDICATED.Gbps10.discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={handleClick}>{t('Оформить заказ')}</Button>
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


      {/* Gbps25 */}
      <div className="tariffs__element">
        <div className="tariffs__name tariffs__name--var3">25 Gbps</div>
        <div className="tariffs__display">
          <div className="tariffs__price">
            <span className="tariffs__symbol">&#8364;</span>
            <span>{gbps25.price}</span>
          </div>
          <div
            role="button"
            className={["selector", !tariffObject["Gbps25"] ? "__open" : ""].join(" ")}
            onClick={(e) => changeVisibility(e, "Gbps25")}
          >
            <div className="selector__month">{t(declension('%d %s', gbps25.month, ['месяц', 'месяца', 'месяцев']))}</div>

            {/* GRID */}
            <div className="selector__grid">

              {/* 1-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps25({price: DEDICATED.Gbps25.one, month: 1})}>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{DEDICATED.Gbps25.one}</span>
                </div>
                <div className="selector__element"></div>
                <div className="selector__element ">
                  {t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 2-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps25({price: DEDICATED.Gbps25.three.new, month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{DEDICATED.Gbps25.three.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{DEDICATED.Gbps25.three.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps25({price: DEDICATED.Gbps25.six.new, month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{DEDICATED.Gbps25.six.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{DEDICATED.Gbps25.six.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps25({price: DEDICATED.Gbps25.twelve.new, month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{DEDICATED.Gbps25.twelve.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{DEDICATED.Gbps25.twelve.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;{DEDICATED.Gbps25.discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={handleClick}>{t('Оформить заказ')}</Button>
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



      {/* Gbps40 */}
      <div className="tariffs__element">
        <div className="tariffs__name tariffs__name--var4">40 Gbps</div>
        <div className="tariffs__display">
          <div className="tariffs__price">
            <span className="tariffs__symbol">&#8364;</span>
            <span>{gbps40.price}</span>
          </div>
          <div
            role="button"
            className={["selector", !tariffObject["Gbps40"] ? "__open" : ""].join(" ")}
            onClick={(e) => changeVisibility(e, "Gbps40")}
          >
            <div className="selector__month">{t(declension('%d %s', gbps40.month, ['месяц', 'месяца', 'месяцев']))}</div>

            {/* GRID */}
            <div className="selector__grid">

              {/* 1-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps40({price: DEDICATED.Gbps40.one, month: 1})}>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{DEDICATED.Gbps40.one}</span>
                </div>
                <div className="selector__element"></div>
                <div className="selector__element ">
                  {t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 2-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps40({price: DEDICATED.Gbps40.three.new, month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{DEDICATED.Gbps40.three.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{DEDICATED.Gbps40.three.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps40({price: DEDICATED.Gbps40.six.new, month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{DEDICATED.Gbps40.six.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{DEDICATED.Gbps40.six.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps40({price: DEDICATED.Gbps40.twelve.new, month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{DEDICATED.Gbps40.twelve.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{DEDICATED.Gbps40.twelve.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;{DEDICATED.Gbps40.discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={handleClick}>{t('Оформить заказ')}</Button>
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


      {/* Gbps100 */}
      <div className="tariffs__element">
        <div className="tariffs__name tariffs__name--var5">100 Gbps</div>
        <div className="tariffs__display">
          <div className="tariffs__price">
            <span className="tariffs__symbol">&#8364;</span>
            <span>{gbps100.price}</span>
          </div>
          <div
            role="button"
            className={["selector", !tariffObject["Gbps100"] ? "__open" : ""].join(" ")}
            onClick={(e) => changeVisibility(e, "Gbps100")}
          >
            <div className="selector__month">{t(declension('%d %s', gbps100.month, ['месяц', 'месяца', 'месяцев']))}</div>

            {/* GRID */}
            <div className="selector__grid">

              {/* 1-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps100({price: DEDICATED.Gbps100.one, month: 1})}>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>8000</span>
                </div>
                <div className="selector__element"></div>
                <div className="selector__element ">
                  {t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 2-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps100({price: DEDICATED.Gbps100.three.new, month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{DEDICATED.Gbps100.three.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{DEDICATED.Gbps100.three.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps100({price: DEDICATED.Gbps100.six.new, month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{DEDICATED.Gbps100.six.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{DEDICATED.Gbps100.six.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps100({price: DEDICATED.Gbps100.twelve.new, month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{DEDICATED.Gbps100.twelve.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{DEDICATED.Gbps100.twelve.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;{DEDICATED.Gbps100.discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={handleClick}>{t('Оформить заказ')}</Button>
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
            <div className="tariffs__text">Unmetered @ 100 Gbps</div>
          </div>
          <div className="tariffs__box">
            <div className="tariffs__suptitle">{t('ОС')}</div>
            <div className="tariffs__text">Linux / Windows</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DedicatedServer;
