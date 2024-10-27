"use client"
import { FC } from 'react';
import { FaIcon } from '../ui';

interface CopyAnchorProps {
  /** Якорь для якорной ссылки */
  anchor: string
}

export const CopyAnchor: FC<CopyAnchorProps> = ({ anchor }) => {
  const anchorLink = `#${anchor}`;

  const copyAnchorLink = () => {
    const link = [
      window.location.origin,
      window.location.pathname,
      anchorLink
    ].join('');

    navigator.clipboard.writeText(link);
  };

  return (
    <a href={anchorLink} onClick={copyAnchorLink}>
      <FaIcon iconName="fa-solid fa-link" />
    </a>
  );
}
