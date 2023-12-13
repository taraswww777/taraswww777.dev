import {FC, PropsWithChildren, ReactNode} from 'react';

interface QuestionProps {
  title?: ReactNode,
  className?: HTMLDivElement['className']
}

export const Question: FC<PropsWithChildren<QuestionProps>> = ({
  children,
  title = 'Вопрос',
  className
}) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-header bg-primary text-light">
        <strong className="card-title">{title}</strong>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}
