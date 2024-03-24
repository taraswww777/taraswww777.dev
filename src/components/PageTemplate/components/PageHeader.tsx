import { FaIcon } from "../../../ui/FaIcon";
import { Menu } from '../../Menu';
import Link from 'next/link';

export const PageHeader = () => {
  return (
    <div className="
     w-full p-2.5 flex flex-wrap justify-center items-center mx-auto
     lg:flex-nowrap
      ">
      <div className="
      uppercase w-full text-center
      lg:w-auto lg:pr-2.5 lg:text-left
      ">
        <Link href="/">taraswww777</Link>
      </div>
      <div className="
      w-full text-xl  text-center
      lg:w-auto lg:pr-2.5 lg:grow-1
      ">
        <p>
          Ковалёв Тарас Викторович
        </p>
        <p className="text-xs hidden lg:block ">
          Увеличение&nbsp;<FaIcon iconName={'fa-solid fa-arrow-trend-up'} />&nbsp;прибыли&nbsp;и
          сокращение&nbsp;<FaIcon iconName={'fa-solid fa-arrow-trend-down'} />&nbsp;издержек
        </p>
      </div>

      <nav className="
      grow-1 text-center p-0
      md:grow-0 md:text-right md:pl-2.5
      ">
        <Menu />
      </nav>
    </div>
  );
}
