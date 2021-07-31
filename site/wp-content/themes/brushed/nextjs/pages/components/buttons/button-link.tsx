import styles from './buttons.module.scss';
import {ComponentProps} from '../../types/common';

export enum ButtonTypes {
    mini = 'mimi',
    small = 'small',
    medium = 'medium',
    large = 'large',
}

export const ButtonLink = ({
  type = ButtonTypes.medium,
  href,
  title = '',
  children
}: ComponentProps & {
    type?: ButtonTypes
    title?: string,
    href: string
}) => (
  <a
    href={href}
    title={title}
    className={[
      styles.btn,
      styles.btn__link,
      styles[`btn--${type}`]
    ].join(' ')}
  >{children || title}</a>
);
