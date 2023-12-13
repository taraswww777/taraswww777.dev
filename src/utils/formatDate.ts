import {LOCALES} from 'src/constants/common';

export function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  const date = new Date(dateString);
  return date.toLocaleDateString(LOCALES.ruRU, options);
}
