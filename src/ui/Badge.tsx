import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

/**
 * Use STATUSES
 * @deprecated
 */
export enum BADGE_TYPE {
  secondary = 'secondary',
  success = 'success',
  warning = 'warning',
  info = 'info',
  danger = 'danger',
}

interface BadgeProps {
  type?: BADGE_TYPE
}

export const Badge: FC<PropsWithChildren<BadgeProps>> = ({
  children,
  type = BADGE_TYPE.secondary
}) => {
  return (
    <span
      className={classNames(
        'rounded-xl py-1 px-2 inline-block text-xs text-colorTextPrimary',
        {
          ['bg-secondary']: type === BADGE_TYPE.secondary,
          ['bg-success']: type === BADGE_TYPE.success,
          ['bg-warning']: type === BADGE_TYPE.warning,
          ['bg-info']: type === BADGE_TYPE.info,
          ['bg-danger']: type === BADGE_TYPE.danger,
        },
      )}
    >
      {children}
    </span>
  )
}
