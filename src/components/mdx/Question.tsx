import { FC, PropsWithChildren } from 'react';
import { Card, CardProps } from '../../ui';
import { STATUSES } from '../../types/statses';


export const Question: FC<PropsWithChildren<CardProps>> = ({
  title = 'Вопрос',
  ...props
}) => {
  return (
    <Card {...props} title={title} type={STATUSES.info} />
  );
}
