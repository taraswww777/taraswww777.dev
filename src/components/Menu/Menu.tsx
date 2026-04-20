"use client"
import { getPageUrl, PAGE_NAMES } from 'src/constants/pages';
import { memo } from 'react';
import { LINKS } from 'src/constants/links';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { useArticlesNavPanel } from 'src/components/ArticlesPanel/ArticlesNavContext';

export const Menu = memo(() => {
  const pathname = usePathname();
  const { toggle } = useArticlesNavPanel();

  const articlesBase = getPageUrl(PAGE_NAMES.ARTICLES)();

  const isActive = (link: string): boolean => {
    return (pathname || '').includes(link)
  }

  return (
    <div>
      <button
        type="button"
        className={classNames(
          'cursor-pointer border-0 bg-transparent p-0 font-inherit text-left',
          'active:text-colorLinkActive hover:text-linkActive',
          {
            'text-link': !isActive(articlesBase),
            'text-linkActive': isActive(articlesBase),
          }
        )}
        onClick={toggle}
      >
        {LINKS.articlesIndex.title}
      </button>
    </div>
  );
});
