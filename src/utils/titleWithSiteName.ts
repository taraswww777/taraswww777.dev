import {SITE_NAME} from 'src/constants/common';

export const titleWithSiteName = (title: string) => {
  return `${SITE_NAME} ~ ${title}`
}
