import React, {MouseEventHandler, ReactNode} from 'react';
import {Button, ButtonSizes} from '../buttons';
import styles from './information-block.module.scss';


type InformationBlockProps = {
  title?: ReactNode;
  subTitle?: ReactNode;
  btnLabel: string;
  btnOnClick: MouseEventHandler;
  text: ReactNode;
}

export const InformationBlock = ({
  title,
  subTitle,
  btnLabel,
  btnOnClick,
  text
}: InformationBlockProps) => (
  <div className={styles.informationBlock}>
    <div className={styles.informationBlock__title}>{title}</div>
    <div className={styles.informationBlock__content}>
      {subTitle && <div className={styles.informationBlock__subTitle}>{subTitle}</div>}
      <div className={styles.informationBlock__left}>
        <div className={styles.informationBlock__text}>{text}</div>
      </div>
      <div className={styles.informationBlock__right}>
        <Button title={btnLabel} size={ButtonSizes.large} onClick={btnOnClick} />
      </div>
    </div>
  </div>
);
