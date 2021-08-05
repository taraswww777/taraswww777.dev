import React from 'react';
import {ComponentProps, IconLib, SocialLinkIconLib} from 'types';
import styles from './icon.module.scss';

export type IconProps = ComponentProps & {
  icon: IconLib | SocialLinkIconLib,
}

export const Icon  = ({icon}: IconProps) => (
  <span className={[styles[icon], styles.icon].join(' ')} />
);
