import React, {ReactNode} from 'react';
import styles from './tooltip.module.scss';

type TooltipProps = {
  title?: ReactNode;
  content: ReactNode;
}

export const Tooltip = ({title, content}: TooltipProps) => (
  <div className={styles.tooltip}>
    <div className={styles.tooltip__title}>{title}</div>
    <div className={styles.tooltip__content}>{content}</div>
  </div>
);
