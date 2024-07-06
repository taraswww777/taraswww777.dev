import { FC, PropsWithChildren, ReactNode } from 'react';
import classNames from 'classnames';
import { STATUSES } from '../types/statses';


export interface CardProps {
  title?: ReactNode;
  type?: STATUSES;
  footer?: ReactNode
  className?: HTMLDivElement['className']
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
  type = STATUSES.secondary,
  children,
  title,
  footer,
  className
}) => {
  return (
    <section
      className={classNames(
        'w-full inline-block text-xs text-colorTextPrimary border-2',
        className,
        {
          ['border-secondary']: type === STATUSES.secondary,
          ['border-success']: type === STATUSES.success,
          ['border-warning']: type === STATUSES.warning,
          ['border-info']: type === STATUSES.info,
          ['border-danger']: type === STATUSES.danger,
        },
      )}>
      {title && (
        <header
          className={classNames(' py-1 px-2 font-bold text-colorTextPrimary',
            {
              ['bg-secondary']: type === STATUSES.secondary,
              ['bg-success']: type === STATUSES.success,
              ['bg-warning']: type === STATUSES.warning,
              ['bg-info']: type === STATUSES.info,
              ['bg-danger']: type === STATUSES.danger,
            },
          )}>{title}</header>
      )}
      <main className="py-3 px-2">{children}</main>
      {footer && (
        <div className={classNames(
          'w-full p-2 pt-3 inline-block text-xs text-colorTextPrimary',
          {
            ['bg-secondary']: type === STATUSES.secondary,
            ['bg-success']: type === STATUSES.success,
            ['bg-warning']: type === STATUSES.warning,
            ['bg-info']: type === STATUSES.info,
            ['bg-danger']: type === STATUSES.danger,
          },
        )}>{footer}</div>
      )}
    </section>
  );
}
