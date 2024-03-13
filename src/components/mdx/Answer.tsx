import { FC, PropsWithChildren } from 'react';
import { Card, CARD_TYPE, CardProps } from '../../ui/Card';


export const Answer: FC<PropsWithChildren<CardProps>> = ({
  title = 'Ответ',
  ...props
}) => {
  return (
    <Card {...props} title={title} type={CARD_TYPE.success} />
  )
}
