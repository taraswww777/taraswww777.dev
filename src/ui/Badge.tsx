import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { STATUSES } from '../types/statses';


interface BadgeProps {
  type?: STATUSES
}

export const Badge: FC<PropsWithChildren<BadgeProps>> = ({
  children,
  type = STATUSES.secondary
}) => {
  return (
    <span
      className={classNames(
        'rounded-xl py-1 px-2 inline-block text-xs font-bold',
        {
          ['text-colorTextPrimary']: type !== STATUSES.secondary,
          ['bg-secondary text-black']: type === STATUSES.secondary,
          ['bg-success']: type === STATUSES.success,
          ['bg-warning']: type === STATUSES.warning,
          ['bg-info']: type === STATUSES.info,
          ['bg-danger']: type === STATUSES.danger,
        },
      )}
    >
      {children}
    </span>
  )
}
