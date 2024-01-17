import {useEffect, useState} from 'react';
import {isLocalhost} from '../../utils/isLocalhost';

export const YaMetricInformer = () => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    setIsShow(!isLocalhost())
  }, []);


  return isShow ? null : (
    <a href={`https://metrika.yandex.ru/stat/?id=90245180&amp;from=informer`} target="_blank" rel="nofollow">
      <img
        src={`https://informer.yandex.ru/informer/90245180/2_0_EFEFEFFF_EFEFEFFF_0_pageviews`}
        style={{
          width: '100px',
          height: '45px',
          border: 0
        }}
        alt="Яндекс.Метрика"
        title="Яндекс.Метрика: данные за сегодня (просмотры)"
      />
    </a>
  );
}
