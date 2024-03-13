import { FC, PropsWithChildren } from 'react';
import { FluidContentContainer } from './FluidContentContainer';


/** Контейнер с отступами и ограничениями по ширине */
export const ContentContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <FluidContentContainer>
        {children}
      </FluidContentContainer>
    </div>
  )
}
