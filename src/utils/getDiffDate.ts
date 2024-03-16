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
