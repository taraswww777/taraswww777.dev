import React from 'react';
import {ComponentProps} from '../../types/common';
import styles from './icon.module.scss';
import {IconType} from './types';

export type IconProps = ComponentProps & {
    icon: IconType,
}

export const Icon = ({icon}: IconProps) => (
  <span className={[styles[icon], styles.icon].join(' ')} />
);
