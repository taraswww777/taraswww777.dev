import { FC, PropsWithChildren, ReactNode } from 'react';
import { STATUSES, STATUSES_BORDER } from '../../types/statses';
import classNames from 'classnames';

interface BlockQuoteProps {
  title?: ReactNode;
  status?: STATUSES;
}

/** БЛОК ЦИТАТА */
export const BlockQuote: FC<PropsWithChildren<BlockQuoteProps>> = ({
  children,
  title,
  status = STATUSES.danger
}) => {
  return (
    <blockquote className="">
      {title && (
        <div className="text-2xl mb-6">{title}</div>
      )}
      <div className={classNames(
        'py-2.5 px-4 border-l-4',
        STATUSES_BORDER[status]
      )}>{children}</div>
    </blockquote>
  )
}
