import { FC, PropsWithChildren, ReactNode } from 'react';
import classNames from 'classnames';

/**
 * Use STATUSES
 * @deprecated
 */
export enum CARD_TYPE {
  secondary = 'secondary',
  success = 'success',
  warning = 'warning',
  info = 'info',
  danger = 'danger',
}

export interface CardProps {
  title?: ReactNode;
  type?: CARD_TYPE;
  footer?: ReactNode
  className?: HTMLDivElement['className']
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
  type = CARD_TYPE.secondary,
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
          ['border-secondary']: type === CARD_TYPE.secondary,
          ['border-success']: type === CARD_TYPE.success,
          ['border-warning']: type === CARD_TYPE.warning,
          ['border-info']: type === CARD_TYPE.info,
          ['border-danger']: type === CARD_TYPE.danger,
        },
      )}>
      {title && (
        <header
          className={classNames(' py-1 px-2 font-bold text-colorTextPrimary',
            {
              ['bg-secondary']: type === CARD_TYPE.secondary,
              ['bg-success']: type === CARD_TYPE.success,
              ['bg-warning']: type === CARD_TYPE.warning,
              ['bg-info']: type === CARD_TYPE.info,
              ['bg-danger']: type === CARD_TYPE.danger,
            },
          )}>{title}</header>
      )}
      <main className="pt-3 pb-3 px-2">{children}</main>
      {footer && (
        <div className={classNames(
          'w-full p-2 pt-3 mt-2 inline-block text-xs text-colorTextPrimary',
          {
            ['bg-secondary']: type === CARD_TYPE.secondary,
            ['bg-success']: type === CARD_TYPE.success,
            ['bg-warning']: type === CARD_TYPE.warning,
            ['bg-info']: type === CARD_TYPE.info,
            ['bg-danger']: type === CARD_TYPE.danger,
          },
        )}>{footer}</div>
      )}
    </section>
  );
}
