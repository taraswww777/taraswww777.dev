import { FC, PropsWithChildren } from 'react';
import { PageHeader } from './components/PageHeader';
import { PageFooter } from './components/PageFooter';

export const PageTemplate: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full min-h-svh flex flex-wrap flex-col bg-bgBodyPrimary text-colorTextPrimary">
      <header className="w-full bg-bgBodySecondary sticky top-0 left-0 h-fit overflow-hidden">
        <PageHeader />
      </header>
      <main className="w-full overflow-hidden grow-1">
        {children}
      </main>
      <footer className="
      w-full bg-bgBodySecondary sticky bottom-0 left-0 h-fit overflow-hidden max-h-9
      md:max-h-none
      ">
        <PageFooter />
      </footer>
    </div>
  )
}
