import { TariffContext } from '../providers/TariffContext';
import { TARIFF_OBJ, TARIFF_LINKS } from '../data/tarrifs';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { declension } from '../utils/declension';
import Button from './Button';

function VirtualServer() {

	const {t} = useTranslation();

	const { tariffObject, changeTariffCollapse } = useContext(TariffContext);

  const [ de1, setDe1 ] = useState({
    month: 1,
    price: 6
  });
  const [ de2, setDe2 ] = useState({
    month: 1,
    price: 11
  });
  const [ de3, setDe3 ] = useState({
    month: 1,
    price: 21
  });
  const [ de4, setDe4 ] = useState({
    month: 1,
    price: 43
  });
  const [ de5, setDe5 ] = useState({
    month: 1,
    price: 85
  });

	const changeVisibility = (e, tariffName) => {
		e.stopPropagation();
		changeTariffCollapse({...TARIFF_OBJ, [tariffName]: !tariffObject[tariffName]});
	}
  return (
    <>
      {/* DE1 */}
      <div className="tariffs__element">
        <div className="tariffs__name tariffs__name--var1">DE1</div>
        <div className="tariffs__display">
          <div className="tariffs__price">
            <span className="tariffs__symbol">&#8364;</span>
            <span>{de1.price}</span>
          </div>
          <div
            role="button"
            className={["selector", !tariffObject["DE1"] ? "__open" : ""].join(" ")}
            onClick={(e) => changeVisibility(e, "DE1")}
          >
            <div className="selector__month">{t(declension('%d %s', de1.month, ['месяц', 'месяца', 'месяцев']))}</div>

            {/* GRID */}
            <div className="selector__grid">

              {/* 1-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe1({price: '6', month: 1})}>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>6</span>
                </div>
                <div className="selector__element"></div>
                <div className="selector__element">
                  {t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 2-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe1({price: '17,1', month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>18</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>17,1</span>
                </div>
                <div className="selector__element">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe1({price: '32,4', month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>36</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>32,4</span>
                </div>
                <div className="selector__element">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe1({price: '57,6', month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>72</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>57,6</span>
                </div>
                <div className="selector__element">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;4,8&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={() => window.open(TARIFF_LINKS['DE1_' + de1.month], '_blank')}>{t('Оформить заказ')}</Button>
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


      {/* DE2 */}
      <div className="tariffs__element">
        <div className="tariffs__name tariffs__name--var2">DE2</div>
        <div className="tariffs__display">
          <div className="tariffs__price">
            <span className="tariffs__symbol">&#8364;</span>
            <span>{de2.price}</span>
          </div>
          <div
            role="button"
            className={["selector", !tariffObject["DE2"] ? "__open" : ""].join(" ")}
            onClick={(e) => changeVisibility(e, "DE2")}
          >
            <div className="selector__month">{t(declension('%d %s', de2.month, ['месяц', 'месяца', 'месяцев']))}</div>

            {/* GRID */}
            <div className="selector__grid">

              {/* 1-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe2({price: '11', month: 1})}>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>11</span>
                </div>
                <div className="selector__element"></div>
                <div className="selector__element">
                  {t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 2-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe2({price: '31,3', month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>33</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>31,3</span>
                </div>
                <div className="selector__element">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe2({price: '59,4', month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>66</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>59,4</span>
                </div>
                <div className="selector__element">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe2({price: '105,6', month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>132</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>105,6</span>
                </div>
                <div className="selector__element">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;8,8&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={() => window.open(TARIFF_LINKS['DE2_' + de2.month], '_blank')}>{t('Оформить заказ')}</Button>
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


      {/* DE3 */}
      <div className="tariffs__element">
        <div className="tariffs__name tariffs__name--var3">DE3</div>
        <div className="tariffs__display">
          <div className="tariffs__price">
            <span className="tariffs__symbol">&#8364;</span>
            <span>{de3.price}</span>
          </div>
          <div
            role="button"
            className={["selector", !tariffObject["DE3"] ? "__open" : ""].join(" ")}
            onClick={(e) => changeVisibility(e, "DE3")}
          >
            <div className="selector__month">{t(declension('%d %s', de3.month, ['месяц', 'месяца', 'месяцев']))}</div>

            {/* GRID */}
            <div className="selector__grid">

              {/* 1-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe3({price: '21', month: 1})}>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>21</span>
                </div>
                <div className="selector__element"></div>
                <div className="selector__element">
                  {t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 2-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe3({price: '59,8', month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>63</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>59,8</span>
                </div>
                <div className="selector__element">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe3({price: '113,4', month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>126</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>113,4</span>
                </div>
                <div className="selector__element">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe3({price: '201,6', month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>252</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>201,6</span>
                </div>
                <div className="selector__element">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;16,8&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={() => window.open(TARIFF_LINKS['DE3_' + de3.month], '_blank')}>{t('Оформить заказ')}</Button>
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


      {/* DE4 */}
      <div className="tariffs__element">
        <div className="tariffs__name tariffs__name--var4">DE4</div>
        <div className="tariffs__display">
          <div className="tariffs__price">
            <span className="tariffs__symbol">&#8364;</span>
            <span>{de4.price}</span>
          </div>
          <div
            role="button"
            className={["selector", !tariffObject["DE4"] ? "__open" : ""].join(" ")}
            onClick={(e) => changeVisibility(e, "DE4")}
          >
            <div className="selector__month">{t(declension('%d %s', de4.month, ['месяц', 'месяца', 'месяцев']))}</div>

            {/* GRID */}
            <div className="selector__grid">

              {/* 1-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe4({price: '43', month: 1})}>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>43</span>
                </div>
                <div className="selector__element"></div>
                <div className="selector__element">
                  {t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 2-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe4({price: '122,5', month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>129</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>122,5</span>
                </div>
                <div className="selector__element">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe4({price: '232,2', month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>258</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>232,2</span>
                </div>
                <div className="selector__element">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe4({price: '412,8', month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>516</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>412,8</span>
                </div>
                <div className="selector__element">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;34,4&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={() => window.open(TARIFF_LINKS['DE4_' + de4.month], '_blank')}>{t('Оформить заказ')}</Button>
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


      {/* DE5 */}
      <div className="tariffs__element">
        <div className="tariffs__name tariffs__name--var5">DE5</div>
        <div className="tariffs__display">
          <div className="tariffs__price">
            <span className="tariffs__symbol">&#8364;</span>
            <span>{de5.price}</span>
          </div>
          <div
            role="button"
            className={["selector", !tariffObject["DE5"] ? "__open" : ""].join(" ")}
            onClick={(e) => changeVisibility(e, "DE5")}
          >
            <div className="selector__month">{t(declension('%d %s', de5.month, ['месяц', 'месяца', 'месяцев']))}</div>

            {/* GRID */}
            <div className="selector__grid">

              {/* 1-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe5({price: '85', month: 1})}>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>85</span>
                </div>
                <div className="selector__element"></div>
                <div className="selector__element">
                  {t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 2-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe5({price: '242,2', month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>255</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>242,2</span>
                </div>
                <div className="selector__element">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe5({price: '459', month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>510</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>459</span>
                </div>
                <div className="selector__element">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item selector__item--virtual __hover' onClick={() => setDe5({price: '816', month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>1020</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>816</span>
                </div>
                <div className="selector__element">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;68&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={() => window.open(TARIFF_LINKS['DE5_' + de5.month], '_blank')}>{t('Оформить заказ')}</Button>
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
    </>
  );
}

export default VirtualServer;
