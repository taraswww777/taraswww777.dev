import { FC, PropsWithChildren } from 'react';
import { FluidContentContainer } from './FluidContentContainer';


/** Контейнер с отступами и ограничениями по ширине */
export const ContentContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mx-auto w-full min-w-0 max-w-4xl">
      <FluidContentContainer>
        {children}
      </FluidContentContainer>
    </div>
  )
}
