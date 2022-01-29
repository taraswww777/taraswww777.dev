import React, {ReactNode} from 'react';
import {SocialLinkIconLib} from 'types';
import {Icon} from '../icon';
import styles from './social-link.module.scss';


export enum SocialLinkViews {
  simple = 'simple',
  brick = 'brick'
}

export const SOCIAL_LINK_VIEW_DEFAULT = SocialLinkViews.simple;

type SocialLinkProps = {
  icon?: SocialLinkIconLib;
  typeView?: SocialLinkViews;
  title?: string;
  link?: string;
}

export const SocialLink = ({
  title,
  link = '#',
  icon = SocialLinkIconLib['social-500px'],
  typeView = SOCIAL_LINK_VIEW_DEFAULT
}: SocialLinkProps) => {
  return (
    <a
      title={title}
      href={link}
      className={[
        styles.socialLink,
        styles[`socialLink--view_${typeView}`]
      ].join(' ')}
    >
      <Icon icon={icon} />
    </a>
  );
}
