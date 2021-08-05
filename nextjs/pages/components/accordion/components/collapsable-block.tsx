import stringHash from 'string-hash';
import {toString} from 'lodash';
import styles from './collapsable-block.module.scss';
import React, {ReactNode} from 'react';
import {SubTitle} from '../../titles';
import {CollapsableElement, CollapsableElementSpec} from './collapsable-element';


export type PreparedItem = CollapsableElementSpec & {
    hash: number,
}

const freshPreparedItems = (items: Array<CollapsableElementSpec>): Array<PreparedItem> => (
  items.map(item => ({
    ...item,
    hash: stringHash(toString(item.content))
  }))
);

export type CollapsableBlockProps = {
    onToggleElement: (item: PreparedItem, items: Array<PreparedItem>) => Array<PreparedItem>,
    title: ReactNode,
    items: Array<CollapsableElementSpec>,
    iconOpen: ReactNode,
    iconClose: ReactNode
}

export type CollapsableBlockState = {
    preparedItems: Array<PreparedItem>
}

export class CollapsableBlock extends React.Component<CollapsableBlockProps, CollapsableBlockState> {
    state = {
      preparedItems: []
    }

    componentDidMount() {
      const preparedItems = freshPreparedItems(this.props.items);
      this.setState({preparedItems});
    }

    onToggleElement = (preparedItem: PreparedItem) => {
      const {onToggleElement} = this.props;
      const tempPreparedItems = this.state.preparedItems.map((item: PreparedItem) => ({
        ...item,
        isOpen: preparedItem.hash === item.hash ? !item.isOpen : item.isOpen
      }));

      this.setState({
        preparedItems: onToggleElement
          ? onToggleElement(preparedItem, tempPreparedItems)
          : tempPreparedItems
      });
    }

    render() {
      const {
        title,
        iconOpen,
        iconClose
      } = this.props;

      const {preparedItems} = this.state;

      return (
        <div className={styles.block}>
          <div className={styles.block__title}>
            <SubTitle>{title}</SubTitle>
          </div>
          <div className={styles.block__content}>
            {preparedItems.length > 0 && preparedItems.map((item: PreparedItem) => {
              const {
                hash,
                isOpen,
                content
              } = item;
              return (
                <div key={hash} className={styles.block__element}>
                  <CollapsableElement
                    isOpen={isOpen}
                    onToggleElement={() => this.onToggleElement(item)}
                    icon={isOpen ? iconOpen : iconClose}
                    content={content}
                    title={item.title}
                    key={hash}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    }

}
