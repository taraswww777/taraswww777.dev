import { FaIcon } from "../../../ui/FaIcon";
import { Menu } from '../../Menu';
import Link from 'next/link';

export const PageHeader = () => {
  return (
    <div className="w-full p-2.5 flex flex-nowrap justify-center items-center mx-auto">
      <div className="pr-2.5 uppercase">
        <Link href="/">taraswww777</Link>
      </div>
      <div className="text-xl grow-1 text-center">
        <p>
          Ковалёв Тарас Викторович
        </p>
        <p className="text-xs">
          Увеличение&nbsp;<FaIcon iconName={'fa-solid fa-arrow-trend-up'} />&nbsp;прибыли&nbsp;и
          сокращение&nbsp;<FaIcon iconName={'fa-solid fa-arrow-trend-down'} />&nbsp;издержек
        </p>
      </div>
      <nav className="pl-2.5">
        <Menu />
      </nav>
    </div>
  );
}
