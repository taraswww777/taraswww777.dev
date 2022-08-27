import styles from './collapsable-element.module.scss';
import {MouseEventHandler, ReactNode} from 'react';


export type CollapsableElementSpec = {
    title: ReactNode
    content: ReactNode,
    isOpen?: boolean
}

export type CollapsableElementProps = CollapsableElementSpec & {
    onToggleElement: MouseEventHandler,
    icon: ReactNode
}

export const CollapsableElement = ({
  onToggleElement,
  title,
  content,
  isOpen,
  icon
}: CollapsableElementProps) => (
  <div className={styles.element}>
    <div
      onClick={onToggleElement}
      className={[
        styles.element__header,
        isOpen ? styles.element__header_IsOpen : ' '
      ].join(' ')}
    >
      <div className={styles.element__title}>{title}</div>
      <div
        className={[
          styles.element__toggle,
          isOpen ? styles.element__toggle_IsOpen : ''
        ].join(' ')}
      >{icon}</div>
    </div>
    <div
      className={[
        styles.element__content,
        isOpen ? styles.element__content_IsOpen : ''
      ].join(' ')}
    >{content}</div>
  </div>
);
