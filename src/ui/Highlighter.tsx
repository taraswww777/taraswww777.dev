import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

export enum HL_TYPE {
  red = 'red',
  yellow = 'yellow',
  orange = 'orange',
  green = 'green',
  blue = 'blue',
  purple = 'purple',
}

interface HighlighterProps {
  type?: HL_TYPE;
}

export const Highlighter: FC<PropsWithChildren<HighlighterProps>> = ({
  children,
  type = HL_TYPE.yellow
}) => (
  <span className={classNames(
    'py-0.5 px-1 font-bold inline-block',
    {
      ['bg-red text-black']: type === HL_TYPE.red,
      ['bg-hlYellow text-black']: type === HL_TYPE.yellow,
      ['bg-hlOrange text-black']: type === HL_TYPE.orange,
      ['bg-hlGreen text-black']: type === HL_TYPE.green,
      ['bg-hlBlue text-black']: type === HL_TYPE.blue,
      ['bg-hlPurple text-black']: type === HL_TYPE.purple,
    })}>{children}</span>
)

export const HL = Highlighter;
