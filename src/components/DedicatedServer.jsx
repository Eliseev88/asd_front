import { TariffContext } from '../providers/TariffContext';
import { TARIFF_OBJ } from '../data/tarrifs';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { declension } from '../utils/declension';
import Button from './Button';

function DedicatedServer() {
	const {t} = useTranslation();

	const { tariffObject, changeTariffCollapse } = useContext(TariffContext);

  const [ gbps1, setGbps1 ] = useState({
    month: 1,
    price: 400
  });
  const [ gbps10, setGbps10 ] = useState({
    month: 1,
    price: 1600
  });
  const [ gbps25, setGbps25 ] = useState({
    month: 1,
    price: 3000
  });
  const [ gbps40, setGbps40] = useState({
    month: 1,
    price: 4000
  });
  const [ gbps100, setGbps100 ] = useState({
    month: 1,
    price: 8000
  });

  const goToVM = () => {
		window.open('https://vm.asdhere.net', '_blank');
	}

	const changeVisibility = (e, tariffName) => {
		e.stopPropagation();
		changeTariffCollapse({...TARIFF_OBJ, [tariffName]: !tariffObject[tariffName]});
	}
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
              <div className='selector__item __hover' onClick={() => setGbps1({price: '400', month: 1})}>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>400</span>
                </div>
                <div className="selector__element"></div>
                <div className="selector__element ">
                  {t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 2-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps1({price: '1140', month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>1200</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>1140</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps1({price: '2160', month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>2400</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>2160</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps1({price: '3840', month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>4800</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>3840</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;320&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={goToVM}>{t('Оформить заказ')}</Button>
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
              <div className='selector__item __hover' onClick={() => setGbps10({price: '1600', month: 1})}>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>1600</span>
                </div>
                <div className="selector__element"></div>
                <div className="selector__element ">
                  {t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 2-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps10({price: '4560', month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>4800</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>4560</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps10({price: '8640', month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>9600</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>8640</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps10({price: '15360', month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>19200</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>15360</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;1280&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={goToVM}>{t('Оформить заказ')}</Button>
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
              <div className='selector__item __hover' onClick={() => setGbps25({price: '3000', month: 1})}>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>3000</span>
                </div>
                <div className="selector__element"></div>
                <div className="selector__element ">
                  {t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 2-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps25({price: '8550', month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>9000</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>8550</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps25({price: '16200', month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>18000</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>16200</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps25({price: '28800', month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>36000</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>28800</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;2400&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={goToVM}>{t('Оформить заказ')}</Button>
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
              <div className='selector__item __hover' onClick={() => setGbps40({price: '4000', month: 1})}>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>4000</span>
                </div>
                <div className="selector__element"></div>
                <div className="selector__element ">
                  {t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 2-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps40({price: '11400', month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>12000</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>11400</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps40({price: '21600', month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>24000</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>21600</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps40({price: '38400', month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>48000</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>38400</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;3200&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={goToVM}>{t('Оформить заказ')}</Button>
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
              <div className='selector__item __hover' onClick={() => setGbps100({price: '8000', month: 1})}>
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
              <div className='selector__item __hover' onClick={() => setGbps100({price: '22800', month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>24000</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>22800</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps100({price: '43200', month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>48000</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>43200</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item __hover' onClick={() => setGbps100({price: '69000', month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>76800</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>69000</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;6400&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={goToVM}>{t('Оформить заказ')}</Button>
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
