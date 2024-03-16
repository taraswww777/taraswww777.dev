import { FC, PropsWithChildren } from 'react';

/** Контейнер с отступами и БЕЗ ограничений по ширине */
export const FluidContentContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full py-2 px-2 flex flex-wrap gap-y-3">
      {children}
    </div>
  )
}
