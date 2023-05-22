export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return [year, month, day].join('-');
}

export const getDiffDate = (bDate: Date, eDate: Date): {
  diffTime: number,
  diffMonth: number,
  y: number,
  m: number
} => {
  const diffTime = eDate.getTime() - bDate.getTime();
  const diffMonth = Math.trunc(diffTime / (1000 * 60 * 60 * 24 * 30));
  const y = Math.trunc(Math.abs(diffMonth / 12));
  const m = Math.trunc(diffMonth - y * 12);

  return {
    diffTime,
    diffMonth,
    y,
    m,
  };
}
