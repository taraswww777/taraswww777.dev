import {VerticalNavProps} from 'src/components/vertical-nav';
import {forEach} from 'lodash';

interface LinkItem {
  link: string,
  title: string
}

export const linksToVerticalNavItems = (links: Record<string, LinkItem>): VerticalNavProps['items'] => {
  const items: VerticalNavProps['items'] = {};

  forEach(links, (value) => {
    items[value.link] = value.title
  });

  return items;
}
