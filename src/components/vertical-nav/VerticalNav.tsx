import Link from 'next/link';

interface VerticalNavProps {
  items: Record<string, string>
}

export const VerticalNav = ({items}: VerticalNavProps) => {
  return (
    <ol className="nav flex-column">
      {Object.keys(items).map((url) => (
        <li className='nav-item mt-3'>
          <Link
            className="nav-link btn btn-light"
            href={url}>
            {items[url]}
          </Link>
        </li>
      ))}
    </ol>
  )
}
