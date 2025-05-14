// import {LOCALES} from 'src/constants/common';
// export function formatDate(dateString: string) {
//   const options: Intl.DateTimeFormatOptions = {
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric'
//   };
//   const date = new Date(dateString);
//   return date.toLocaleDateString(LOCALES.ruRU, options);
// }


export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return [ day, month, year ].join('.');
}
