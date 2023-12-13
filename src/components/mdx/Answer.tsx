import {FC, PropsWithChildren, ReactNode} from 'react';

interface AnswerProps {
  title?: ReactNode,
  className?: HTMLDivElement['className']
}

export const Answer: FC<PropsWithChildren<AnswerProps>> = ({
  children,
  title = 'Ответ',
  className
}) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-header bg-success text-light">
        <strong className="card-title">{title}</strong>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}
