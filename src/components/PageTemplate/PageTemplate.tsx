import { FC, PropsWithChildren } from 'react';
import { ArticlesNavShell } from '../ArticlesPanel/ArticlesNavShell';
import { PageHeader } from './components/PageHeader';
import { PageFooter } from './components/PageFooter';

export const PageTemplate: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ArticlesNavShell>
    <div className="flex h-svh max-h-svh min-h-0 w-full min-w-0 max-w-full flex-col overflow-hidden bg-bgBodyPrimary text-colorTextPrimary">
      <header className="h-fit w-full shrink-0 overflow-hidden bg-bgBodySecondary">
        <PageHeader />
      </header>
      <main
        data-page-main-scroll
        className="page-main-scroll min-h-0 w-full min-w-0 max-w-full flex-1 overflow-y-auto overflow-x-hidden"
      >
        {children}
      </main>
      <footer className="h-fit max-h-9 w-full shrink-0 overflow-hidden bg-bgBodySecondary md:max-h-none">
        <PageFooter />
      </footer>
    </div>
    </ArticlesNavShell>
  )
}
