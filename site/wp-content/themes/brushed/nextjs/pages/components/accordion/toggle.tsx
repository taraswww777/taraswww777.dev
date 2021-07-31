import React from 'react';
import {ComponentProps} from '../../types/common';
import {IconType} from '../../components/icon/types';
import {Icon} from '../../components/icon';
import {
  CollapsableBlock,
  PreparedItem,
  CollapsableComponent,
  CollapsableElementSpec
} from './components';



export type ToggleProps = ComponentProps & {
    title: string,
    items: Array<CollapsableElementSpec>
}
const IconOpen = <Icon iconType={IconType.minus} />;
const IconClose = <Icon iconType={IconType.plus} />;

export class Toggle extends React.Component<ToggleProps> implements CollapsableComponent {
    onToggleElement = (el: PreparedItem, items: Array<PreparedItem>): Array<PreparedItem> => {
      return items;
    }

    render() {
      const {items, title} = this.props;

      return (
        <CollapsableBlock
          title={title}
          iconOpen={IconOpen}
          iconClose={IconClose}
          items={items}
          onToggleElement={this.onToggleElement}
        />
      );
    }

}
