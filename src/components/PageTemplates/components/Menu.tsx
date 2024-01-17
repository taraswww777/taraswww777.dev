import {getPageUrl, PAGE_NAMES} from 'src/constants/pages';
import {useToggle} from 'src/hooks/useToggle';
import {FaIcon} from 'src/components/FaIcon';
import {useRouter} from 'next/router';
import {memo, useCallback} from 'react';
import Link from 'next/link';
import {LINKS} from 'src/constants/links';
import {linkWithTime} from 'src/utils/linkWithTime';

export const Menu = memo(() => {
  const {value: isOpen, toggle} = useToggle();
  const router = useRouter();

  const isActive = useCallback((pageName: PAGE_NAMES) => {
    const url = getPageUrl(pageName)();

    return (url === router.pathname);
  }, []);

  return (
    <nav className="navbar bg-body-tertiary" style={{position: 'relative'}}>
      <button className="btn btn-light" type="button" title={'Меню'} onClick={toggle}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className={`navbar-nav bg-light  text-end top-100 end-0  ps-4 pe-4 pt-2 pb-2 me-auto mb-2 mb-lg-0 ${isOpen ? 'show' : 'd-none'}`}
          style={{position: 'absolute'}}
      >
        <li className="nav-item">
          <Link
            className={[`nav-link`, isActive(PAGE_NAMES.HOME) ? 'active' : ''].join(' ')}
            title={LINKS.home.title}
            href={getPageUrl(PAGE_NAMES.HOME)()}
          ><FaIcon iconName={'fa-solid fa-home'} /></Link>
        </li>
        <li className="nav-item">
          <Link
            className={[`nav-link`, isActive(PAGE_NAMES.ARTICLES) ? 'active' : ''].join(' ')}
            href={linkWithTime(getPageUrl(PAGE_NAMES.ARTICLES)())}
          >
            {LINKS.articlesIndex.title}
          </Link>
        </li>
      </ul>
    </nav>
  );
});
