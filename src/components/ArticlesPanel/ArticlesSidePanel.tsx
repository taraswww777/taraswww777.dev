'use client';

import Link from 'next/link';
import { useCallback, useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { LINKS } from 'src/constants/links';
import { getPageUrl, PAGE_NAMES } from 'src/constants/pages';
import { publishedArticlesNav } from 'src/lib/publishedArticlesSync';
import { useArticlesNavPanel } from './ArticlesNavContext';

export function ArticlesSidePanel() {
  const { open, setOpen } = useArticlesNavPanel();
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const main = document.querySelector<HTMLElement>('main[data-page-main-scroll]');
    const target = main ?? document.body;
    const prevOverflow = target.style.overflow;
    const prevPaddingRight = target.style.paddingRight;
    const gutter = target === document.body
      ? window.innerWidth - document.documentElement.clientWidth
      : target.offsetWidth - target.clientWidth;
    target.style.overflow = 'hidden';
    if (gutter > 0) {
      target.style.paddingRight = `${gutter}px`;
    }
    closeBtnRef.current?.focus();
    return () => {
      target.style.overflow = prevOverflow;
      target.style.paddingRight = prevPaddingRight;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, setOpen]);

  const onBackdropClick = useCallback(() => setOpen(false), [setOpen]);

  if (typeof document === 'undefined' || !open) return null;

  return createPortal(
    <>
      <div
        role="presentation"
        className="fixed inset-0 z-[100] bg-black/50"
        onClick={onBackdropClick}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="fixed inset-y-0 right-0 z-[101] flex w-[80vw] max-w-full flex-col bg-bgBodySecondary text-colorTextPrimary shadow-2xl"
      >
        <div className="flex shrink-0 items-center justify-between gap-2 border-b border-white/10 p-3">
          <h2 id={titleId} className="m-0 text-lg font-normal uppercase tracking-wide">
            {LINKS.articlesIndex.title}
          </h2>
          <button
            ref={closeBtnRef}
            type="button"
            className="rounded border border-white/20 px-2 py-1 text-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--activeLink)]"
            onClick={() => setOpen(false)}
            aria-label="Закрыть список статей"
          >
            ✕
          </button>
        </div>
        <nav
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-2"
          aria-label="Статьи"
        >
          <ol className="m-0 list-none p-0">
            {publishedArticlesNav.map((a) => {
              const href = getPageUrl(PAGE_NAMES.ARTICLES_ITEM)({ id: a.slug });
              return (
                <li key={a.slug} className="border-b border-white/5 last:border-b-0">
                  <Link
                    href={href}
                    className="block py-2.5 text-left text-link hover:text-linkActive active:text-colorLinkActive"
                    onClick={() => setOpen(false)}
                  >
                    {a.title}
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>
        <div className="shrink-0 border-t border-white/10 p-3">
          <Link
            href={LINKS.articlesIndex.link}
            className="text-sm text-[var(--secondary)] underline-offset-2 hover:text-linkActive hover:underline"
            onClick={() => setOpen(false)}
          >
            Открыть страницу со списком
          </Link>
        </div>
      </div>
    </>,
    document.body
  );
}
