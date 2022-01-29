import {ReactNode} from "react"
import styles from './text.module.scss';

export enum MarkedTextTypes {
  none = 'none',
  danger = 'danger',
  warning = 'warning',
  success = 'success',
  info = 'info',
}

export const MarkedText = ({
  children,
  type = MarkedTextTypes.danger
}: {
  children: ReactNode,
  type?: MarkedTextTypes
}) => (
  <span
    className={[
      styles.markedText,
      styles[`markedText--type_${type}`],
    ].join(' ')}
  >
    {children}
  </span>
);

