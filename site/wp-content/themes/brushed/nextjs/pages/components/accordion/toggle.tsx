import React from 'react';
import {IconLib, ComponentProps} from '../../types';
import {Icon} from '../icon';
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
const IconOpen = <Icon icon={IconLib.minus} />;
const IconClose = <Icon icon={IconLib.plus} />;

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
