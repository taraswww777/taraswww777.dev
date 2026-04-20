import { FC, PropsWithChildren } from 'react';
import { ArticlesNavShell } from '../ArticlesPanel/ArticlesNavShell';
import { PageHeader } from './components/PageHeader';
import { PageFooter } from './components/PageFooter';

export const PageTemplate: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ArticlesNavShell>
    <div className="flex min-h-svh w-full min-w-0 max-w-full flex-col flex-wrap bg-bgBodyPrimary text-colorTextPrimary">
      <header className="w-full bg-bgBodySecondary sticky top-0 left-0 h-fit overflow-hidden">
        <PageHeader />
      </header>
      <main className="w-full min-w-0 max-w-full grow-1 overflow-x-hidden">
        {children}
      </main>
      <footer className="
      w-full bg-bgBodySecondary sticky bottom-0 left-0 h-fit overflow-hidden max-h-9
      md:max-h-none
      ">
        <PageFooter />
      </footer>
    </div>
    </ArticlesNavShell>
  )
}
