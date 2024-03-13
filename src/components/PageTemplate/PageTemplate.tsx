import { FC, PropsWithChildren, ReactNode } from 'react';
import { PageHeader as DefaultHeaderComponent } from './components/PageHeader';
import { PageFooter } from './components/PageFooter';
import { ContentContainer } from '../../ui/ContentContainer';

interface PageTemplatesProps {
  // TODO: Убрать кастомизацию header
  header?: ReactNode
}

export const PageTemplate: FC<PropsWithChildren<PageTemplatesProps>> = ({ children }) => {
  return (
    <div className="w-full min-h-svh flex flex-wrap flex-col bg-bgBodyPrimary text-colorTextPrimary">
      <header className="w-full bg-bgBodySecondary sicky top-0 left-0 h-fit">
        <DefaultHeaderComponent />
      </header>
      <main className="w-full overflow-hidden grow-1">
        {children}
      </main>
      <footer className="w-full bg-bgBodySecondary sticky bottom-0 left-0 h-fit">
        <ContentContainer>
          <PageFooter />
        </ContentContainer>
      </footer>
    </div>
  )
}
