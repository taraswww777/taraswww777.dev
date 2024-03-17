import { FaIcon } from "../../../ui/FaIcon";
import { Menu } from '../../Menu';
import Link from 'next/link';

export const PageHeader = () => {
  return (
    <div className="
    w-full p-2.5 flex flex-wrap justify-center items-center mx-auto
    md:flex-nowrap
    ">
      <div className="
      uppercase grow-1 text-center
      md:grow-0 md:pr-2.5 md:text-left md:pb-0
      ">
        <Link href="/">taraswww777</Link>
      </div>

      <div className="
      text-xl grow-1 text-center w-full hidden
      md:block
      ">
        <p>
          Ковалёв Тарас Викторович
        </p>
        <p className="
        text-xs hidden
        lg:inline-block
        ">
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
