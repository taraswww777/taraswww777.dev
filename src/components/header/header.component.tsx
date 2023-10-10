import {FaIcon} from "../fa-icon";

export const HeaderComponent = () => {
  return (
    <div>
      <h1 className="text-center">Ковалёв Тарас Викторович (taraswww777)</h1>
      <p className="text-center">
        Увеличение&nbsp;<FaIcon iconName={'fa-solid fa-arrow-trend-up'} />&nbsp;прибыли&nbsp;и
        сокращение&nbsp;<FaIcon iconName={'fa-solid fa-arrow-trend-down'} />&nbsp;издержек
      </p>
    </div>
  );
}
