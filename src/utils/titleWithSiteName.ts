import {SITE_NAME} from 'src/constants/common';

export const titleWithSiteName = (title?: string) => {
  return title ? `${SITE_NAME} ~ ${title}` : SITE_NAME
}
