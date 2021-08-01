import styles from './buttons.module.scss';
import {ComponentProps} from '../../types/common';
import { ButtonSizes } from './button';


export const ButtonLink = ({
  size = ButtonSizes.medium,
  href,
  title = '',
  children
}: ComponentProps & {
    size?: ButtonSizes
    title?: string,
    href: string
}) => (
  <a
    href={href}
    title={title}
    className={[
      styles.btn,
      styles.btn__link,
      styles[`btn--size_${size}`]
    ].join(' ')}
  >{children || title}</a>
);
