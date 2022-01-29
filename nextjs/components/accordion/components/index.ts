import {CollapsableBlock, PreparedItem} from './collapsable-block';
import {CollapsableElementSpec} from './collapsable-element';

export interface CollapsableComponent {
    onToggleElement(item: PreparedItem, items: Array<PreparedItem>): Array<PreparedItem>
}

export {
  CollapsableBlock
}

export type {
  PreparedItem,
  CollapsableElementSpec
}
