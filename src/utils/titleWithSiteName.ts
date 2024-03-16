import {SITE_NAME} from 'src/constants/common';

export const titleWithSiteName = (title?: string) => {
  return title ? `${title} ~ ${SITE_NAME}` : SITE_NAME
}
