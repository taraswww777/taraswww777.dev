import {ComponentProps} from '../../types/common';
import styles from './title.module.scss';

export const Title = ({children}: ComponentProps) => (
  <h1 className={styles.title}>{children}</h1>
);

export const SubTitle = ({children}: ComponentProps) => (
  <h2 className={styles.subTitle}>{children}</h2>
);

export const TitleContainer = ({children}: ComponentProps) => (
  <div className={styles.titleContainer}>{children}</div>
);

