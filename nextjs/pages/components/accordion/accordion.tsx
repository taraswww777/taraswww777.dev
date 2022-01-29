import React from 'react';
import {IconLib, ComponentProps} from '../../types';
import {Icon} from '../icon';
import {
  CollapsableBlock,
  PreparedItem,
  CollapsableComponent,
  CollapsableElementSpec
} from './components';


export type AccordionProps = ComponentProps & {
  title: string,
  items: Array<CollapsableElementSpec>
}

export class Accordion extends React.Component<AccordionProps> implements CollapsableComponent {
  onToggleElement = (el: PreparedItem, items: Array<PreparedItem>): Array<PreparedItem> => (
    items.map(item => ({
      ...item,
      isOpen: item.hash === el.hash ? item.isOpen : false
    }))
  )

  render() {
    const {items, title} = this.props;
    const icon = <Icon icon={IconLib['arrow-simple-up']} />;
    return (
      <CollapsableBlock
        title={title}
        iconOpen={icon}
        iconClose={icon}
        items={items}
        onToggleElement={this.onToggleElement}
      />
    );
  }

}
