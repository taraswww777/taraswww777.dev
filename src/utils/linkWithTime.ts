const v = (new Date()).getTime().toString();

export const linkWithTime = (url: string): string => {
    const params  = new URLSearchParams({v});


  return `${url}?${params.toString()}`;
}
