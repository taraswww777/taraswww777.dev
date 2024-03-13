import { FC, PropsWithChildren } from 'react';
import { Card, CARD_TYPE, CardProps } from '../../ui/Card';


export const Question: FC<PropsWithChildren<CardProps>> = ({
  title = 'Вопрос',
  ...props
}) => {
  return (
    <Card {...props} title={title} type={CARD_TYPE.info} />
  );
}
