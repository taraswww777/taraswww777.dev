import moment from "moment/moment";


interface WorkIntervalComponentParams {
  dateBegin: string;
  dateEnd: string;
}

export const workIntervalComponent = ({dateBegin, dateEnd}: WorkIntervalComponentParams) => {
  const b = moment(dateBegin);
  const e = moment(dateEnd);
  const diffMonth = e.diff(b, 'months');
  const y = Math.trunc(Math.abs(diffMonth / 12));
  const m = diffMonth - y * 12;

  return (`${dateBegin} - ${dateEnd} (${y ? y + 'г ' : ''}${m || 0}м)`)
}
