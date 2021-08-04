import React, {ReactNode} from 'react';
import styles from './blockquote.module.scss';


type BlockquoteProps = {
  title?: ReactNode;
  author?: ReactNode;
  content: ReactNode;
}

export const Blockquote = ({title, author, content}: BlockquoteProps) => (
  <div className={styles.blockquote}>
    <div className={styles.blockquote__title}>{title}</div>
    <blockquote className={styles.blockquote__wrapper}>
      <div className={styles.blockquote__content}>{content}</div>
      {author && <div className={styles.blockquote__author}>{author}</div>}
    </blockquote>
  </div>
);
