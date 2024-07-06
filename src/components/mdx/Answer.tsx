import { FC, PropsWithChildren } from 'react';
import { Card, CardProps } from '../../ui';
import { STATUSES } from '../../types/statses';


export const Answer: FC<PropsWithChildren<CardProps>> = ({
  title = 'Ответ',
  ...props
}) => {
  return (
    <Card {...props} title={title} type={STATUSES.success} />
  )
}
