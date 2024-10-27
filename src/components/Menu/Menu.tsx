"use client"
import { getPageUrl, PAGE_NAMES } from 'src/constants/pages';
import { memo } from 'react';
import Link from 'next/link';
import { LINKS } from 'src/constants/links';
import { linkWithTime } from 'src/utils/linkWithTime';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

export const Menu = memo(() => {
  const pathname = usePathname();

  const isActive = (link: string): boolean => {
    return (pathname || '').includes(link)
  }

  return (
    <div>
      <Link
          className={classNames(
            'active:text-colorLinkActive hover:text-linkActive',
            {
              'text-link': !isActive(getPageUrl(PAGE_NAMES.ARTICLES)()),
              'text-linkActive': isActive(getPageUrl(PAGE_NAMES.ARTICLES)()),
            }
          )}
        href={getPageUrl(PAGE_NAMES.ARTICLES)() || linkWithTime(getPageUrl(PAGE_NAMES.ARTICLES)())}
      >
        {LINKS.articlesIndex.title}
      </Link>
    </div>
  );
});
