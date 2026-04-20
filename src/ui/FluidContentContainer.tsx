import { FC, PropsWithChildren } from 'react';

/** Контейнер с отступами и БЕЗ ограничений по ширине */
export const FluidContentContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex w-full min-w-0 max-w-full flex-wrap gap-y-3 px-2 py-2">
      {children}
    </div>
  )
}
