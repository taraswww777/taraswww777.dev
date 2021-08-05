import styles from './buttons.module.scss';
import {MouseEventHandler} from 'react';
import {ComponentProps} from 'types/common';

export enum ButtonTypes {
  none = 'none',
  danger = 'danger',
  warning = 'warning',
  success = 'success',
  info = 'info',
}

export enum ButtonSizes {
  mini = 'mimi',
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export const Button = ({
  size = ButtonSizes.medium,
  type = ButtonTypes.danger,
  onClick,
  title = '',
  isActive,
  children
}: ComponentProps & {
  size?: ButtonSizes
  type?: ButtonTypes
  title?: string,
  isActive?: boolean,
  onClick: MouseEventHandler
}) => (
  <button
    onClick={onClick}
    title={title}
    className={[
      styles.btn,
      isActive && styles[`btn--active`],
      styles[`btn--size_${size}`],
      styles[`btn--type_${type}`]
    ].join(' ')}
  >{children || title}</button>
);
