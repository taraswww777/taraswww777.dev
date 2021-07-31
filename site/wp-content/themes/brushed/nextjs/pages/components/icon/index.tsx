import React from 'react';
import {ComponentProps} from '../../types/common';
import styles from './icon.module.scss';
import {IconType} from './types';

export type IconProps = ComponentProps & {
    iconType: IconType,
}

export const Icon = ({iconType}: IconProps) => (
  <span className={[styles[iconType], styles.icon].join(' ')} />
);
