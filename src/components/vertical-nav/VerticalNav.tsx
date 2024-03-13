import Link from 'next/link';
import { linkWithTime } from 'src/utils/linkWithTime';

export interface VerticalNavProps {
  items: Record<string, string>
}


export const VerticalNav = ({ items }: VerticalNavProps) => {
  return (
    <ol className="nav flex-column">
      {Object.keys(items).map((url) => (
        <li className='nav-item mt-3' key={url}>
          <Link
            className="nav-link btn btn-light"
            href={url || linkWithTime(url)}>
            {items[url]}
          </Link>
        </li>
      ))}
    </ol>
  )
}
