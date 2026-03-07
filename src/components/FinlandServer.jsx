import { TariffContext } from '../providers/TariffContext';
import { TARIFF_OBJ, FINLAND, TARIFF_LINKS } from '../data/tarrifs';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { declension } from '../utils/declension';
import Button from './Button';

function DedicatedServer() {
	const {t} = useTranslation();

	const { tariffObject, changeTariffCollapse } = useContext(TariffContext);

  const [ ep1, setEp1 ] = useState({
    month: 1,
    price: FINLAND['[FI] EP-1'].one
  });
  const [ ep2, setEp2 ] = useState({
    month: 1,
    price: FINLAND['[FI] EP-2'].one
  });
  const [ ep3, setEp3 ] = useState({
    month: 1,
    price: FINLAND['[FI] EP-3'].one
  });
  const [ ep4, setEp4] = useState({
    month: 1,
    price: FINLAND['[FI] EP-4'].one
  });
  const [ ep5, setEp5 ] = useState({
    month: 1,
    price: FINLAND['[FI] EP-5'].one
  });

	const changeVisibility = (e, tariffName) => {
		e.stopPropagation();
		changeTariffCollapse({...TARIFF_OBJ, [tariffName]: !tariffObject[tariffName]});
	}


  return (
    <>
      {/* EP-1 */}
      <div className="tariffs__element">
        <div className="tariffs__name tariffs__name--var1">EP-1</div>
        <div className="tariffs__display">
          <div className="tariffs__price">
            <span className="tariffs__symbol">&#8364;</span>
            <span>{ep1.price}</span>
          </div>
          <div
            role="button"
            className={["selector", !tariffObject["FN_EP1"] ? "__open" : ""].join(" ")}
            onClick={(e) => changeVisibility(e, "FN_EP1")}
          >
            <div className="selector__month">{t(declension('%d %s', ep1.month, ['месяц', 'месяца', 'месяцев']))}</div>

            {/* GRID */}
            <div className="selector__grid">

              {/* 1-ROW */}
              <div className='selector__item __hover' onClick={() => setEp1({price: FINLAND['[FI] EP-1'].one, month: 1})}>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-1'].one}</span>
                </div>
                <div className="selector__element"></div>
                <div className="selector__element ">
                  {t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 2-ROW */}
              <div className='selector__item __hover' onClick={() => setEp1({price: FINLAND['[FI] EP-1'].three.new, month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{FINLAND['[FI] EP-1'].three.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-1'].three.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item __hover' onClick={() => setEp1({price: FINLAND['[FI] EP-1'].six.new, month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{FINLAND['[FI] EP-1'].six.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-1'].six.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item __hover' onClick={() => setEp1({price: FINLAND['[FI] EP-1'].twelve.new, month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{FINLAND['[FI] EP-1'].twelve.new}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-1'].twelve.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;{FINLAND['[FI] EP-1'].discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={() => window.open(TARIFF_LINKS['[FI] EP-1_' + ep1.month], '_blank')}>{t('Оформить заказ')}</Button>
        <div className='tariffs__info'>
          <div className="tariffs__box">
            <div className="tariffs__suptitle">{t('Процессор')}</div>
            <div className="tariffs__text">AMD EPYC 9454</div>
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


      {/* EP-2 */}
      <div className="tariffs__element">
        <div className="tariffs__name tariffs__name--var2">EP-2</div>
        <div className="tariffs__display">
          <div className="tariffs__price">
            <span className="tariffs__symbol">&#8364;</span>
            <span>{ep2.price}</span>
          </div>
          <div
            role="button"
            className={["selector", !tariffObject["FN_EP2"] ? "__open" : ""].join(" ")}
            onClick={(e) => changeVisibility(e, "FN_EP2")}
          >
            <div className="selector__month">{t(declension('%d %s', ep2.month, ['месяц', 'месяца', 'месяцев']))}</div>

            {/* GRID */}
            <div className="selector__grid">

              {/* 1-ROW */}
              <div className='selector__item __hover' onClick={() => setEp2({price: FINLAND['[FI] EP-2'].one, month: 1})}>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-2'].one}</span>
                </div>
                <div className="selector__element"></div>
                <div className="selector__element ">
                  {t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 2-ROW */}
              <div className='selector__item __hover' onClick={() => setEp2({price: FINLAND['[FI] EP-2'].three.new, month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{FINLAND['[FI] EP-2'].three.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-2'].three.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item __hover' onClick={() => setEp2({price: FINLAND['[FI] EP-2'].six.new, month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{FINLAND['[FI] EP-2'].six.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-2'].six.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item __hover' onClick={() => setEp2({price: FINLAND['[FI] EP-2'].twelve.new, month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{FINLAND['[FI] EP-2'].twelve.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-2'].twelve.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;{FINLAND['[FI] EP-2'].discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={() => window.open(TARIFF_LINKS['[FI] EP-2_' + ep2.month], '_blank')}>{t('Оформить заказ')}</Button>
        <div className='tariffs__info'>
          <div className="tariffs__box">
            <div className="tariffs__suptitle">{t('Процессор')}</div>
            <div className="tariffs__text">AMD EPYC 9454</div>
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


      {/* EP-3 */}
      <div className="tariffs__element">
        <div className="tariffs__name tariffs__name--var3">EP-3</div>
        <div className="tariffs__display">
          <div className="tariffs__price">
            <span className="tariffs__symbol">&#8364;</span>
            <span>{ep3.price}</span>
          </div>
          <div
            role="button"
            className={["selector", !tariffObject["FN_EP3"] ? "__open" : ""].join(" ")}
            onClick={(e) => changeVisibility(e, "FN_EP3")}
          >
            <div className="selector__month">{t(declension('%d %s', ep3.month, ['месяц', 'месяца', 'месяцев']))}</div>

            {/* GRID */}
            <div className="selector__grid">

              {/* 1-ROW */}
              <div className='selector__item __hover' onClick={() => setEp3({price: FINLAND['[FI] EP-3'].one, month: 1})}>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-3'].one}</span>
                </div>
                <div className="selector__element"></div>
                <div className="selector__element ">
                  {t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 2-ROW */}
              <div className='selector__item __hover' onClick={() => setEp3({price: FINLAND['[FI] EP-3'].three.new, month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{FINLAND['[FI] EP-3'].three.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-3'].three.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item __hover' onClick={() => setEp3({price: FINLAND['[FI] EP-3'].six.new, month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{FINLAND['[FI] EP-3'].six.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-3'].six.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item __hover' onClick={() => setEp3({price: FINLAND['[FI] EP-3'].twelve.new, month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{FINLAND['[FI] EP-3'].twelve.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-3'].twelve.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;{FINLAND['[FI] EP-3'].discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={() => window.open(TARIFF_LINKS['[FI] EP-3_' + ep3.month], '_blank')}>{t('Оформить заказ')}</Button>
        <div className='tariffs__info'>
          <div className="tariffs__box">
            <div className="tariffs__suptitle">{t('Процессор')}</div>
            <div className="tariffs__text">AMD EPYC 9454</div>
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



      {/* EP-4 */}
      <div className="tariffs__element">
        <div className="tariffs__name tariffs__name--var4">EP-4</div>
        <div className="tariffs__display">
          <div className="tariffs__price">
            <span className="tariffs__symbol">&#8364;</span>
            <span>{ep4.price}</span>
          </div>
          <div
            role="button"
            className={["selector", !tariffObject["FN_EP4"] ? "__open" : ""].join(" ")}
            onClick={(e) => changeVisibility(e, "FN_EP4")}
          >
            <div className="selector__month">{t(declension('%d %s', ep4.month, ['месяц', 'месяца', 'месяцев']))}</div>

            {/* GRID */}
            <div className="selector__grid">

              {/* 1-ROW */}
              <div className='selector__item __hover' onClick={() => setEp4({price: FINLAND['[FI] EP-4'].one, month: 1})}>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-4'].one}</span>
                </div>
                <div className="selector__element"></div>
                <div className="selector__element ">
                  {t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 2-ROW */}
              <div className='selector__item __hover' onClick={() => setEp4({price: FINLAND['[FI] EP-4'].three.new, month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{FINLAND['[FI] EP-4'].three.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-4'].three.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item __hover' onClick={() => setEp4({price: FINLAND['[FI] EP-4'].six.new, month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{FINLAND['[FI] EP-4'].six.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-4'].six.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item __hover' onClick={() => setEp4({price: FINLAND['[FI] EP-4'].twelve.new, month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{FINLAND['[FI] EP-4'].twelve.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-4'].twelve.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;{FINLAND['[FI] EP-4'].discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={() => window.open(TARIFF_LINKS['[FI] EP-4_' + ep4.month], '_blank')}>{t('Оформить заказ')}</Button>
        <div className='tariffs__info'>
          <div className="tariffs__box">
            <div className="tariffs__suptitle">{t('Процессор')}</div>
            <div className="tariffs__text">AMD EPYC 9454</div>
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


      {/* EP-5 */}
      <div className="tariffs__element">
        <div className="tariffs__name tariffs__name--var5">EP-5</div>
        <div className="tariffs__display">
          <div className="tariffs__price">
            <span className="tariffs__symbol">&#8364;</span>
            <span>{ep5.price}</span>
          </div>
          <div
            role="button"
            className={["selector", !tariffObject["FN_EP5"] ? "__open" : ""].join(" ")}
            onClick={(e) => changeVisibility(e, "FN_EP5")}
          >
            <div className="selector__month">{t(declension('%d %s', ep5.month, ['месяц', 'месяца', 'месяцев']))}</div>

            {/* GRID */}
            <div className="selector__grid">

              {/* 1-ROW */}
              <div className='selector__item __hover' onClick={() => setEp5({price: FINLAND['[FI] EP-5'].one, month: 1})}>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-5'].one}</span>
                </div>
                <div className="selector__element"></div>
                <div className="selector__element ">
                  {t(declension('%d %s', 1, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 2-ROW */}
              <div className='selector__item __hover' onClick={() => setEp5({price: FINLAND['[FI] EP-5'].three.new, month: 3})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{FINLAND['[FI] EP-5'].three.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-5'].three.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 3, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 3-ROW */}
              <div className='selector__item __hover' onClick={() => setEp5({price: FINLAND['[FI] EP-5'].six.new, month: 6})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{FINLAND['[FI] EP-5'].six.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-5'].six.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 6, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>

              {/* 4-ROW */}
              <div className='selector__item __hover' onClick={() => setEp5({price: FINLAND['[FI] EP-5'].twelve.new, month: 12})}>
                <div className="selector__element">
                  <div className="selector__old-price">
                    <span>&#8364;</span>
                    <span>{FINLAND['[FI] EP-5'].twelve.old}</span>
                  </div>
                </div>
                <div className="selector__element">
                  <span>&#8364;</span>
                  <span>{FINLAND['[FI] EP-5'].twelve.new}</span>
                </div>
                <div className="selector__element ">
                  {t(declension('%d %s', 12, ['месяц', 'месяца', 'месяцев']))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tariffs__discount'>
          &#8364;&nbsp;{FINLAND['[FI] EP-5'].discount}&nbsp;{t('в месяц')}<br></br>{t('при оплате')} 12&nbsp;{t('месяцев')}
        </div>
        <Button className='tariffs__order-btn' onClick={() => window.open(TARIFF_LINKS['[FI] EP-5_' + ep5.month], '_blank')}>{t('Оформить заказ')}</Button>
        <div className='tariffs__info'>
          <div className="tariffs__box">
            <div className="tariffs__suptitle">{t('Процессор')}</div>
            <div className="tariffs__text">AMD EPYC 9454</div>
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

export default DedicatedServer;
