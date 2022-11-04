import {faArrowTrendUp, faArrowTrendDown} from '@fortawesome/free-solid-svg-icons';

export const HeaderComponent = () => {
  const icons = {
    faArrowTrendUp,
    faArrowTrendDown
  }

  return (
    <div className="my-3">
      <h1 className="text-center">Ковалёв Тарас Викторович (taraswww777)</h1>
      <p className="text-center">
        Увеличение
        {/*<fa-icon [icon]="icons.faArrowTrendUp" style="font-size: 1rem; display: inline-block; max-height: 1rem"/>*/}
        прибыли и сокращение
        {/*<fa-icon [icon]="icons.faArrowTrendDown" style="font-size: 1rem; display: inline-block; max-height: 1rem"/></fa-icon>*/}
        издержек
      </p>
    </div>
  );
}
