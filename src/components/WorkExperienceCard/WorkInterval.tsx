import { formatDate } from '../../utils/formatDate';
import { calculateWorkInterval } from '../../utils/calculateWorkInterval';

interface WorkIntervalProps {
  dateBegin: string;
  dateEnd?: string;
}

const currentDate = new Date().toUTCString();

export const WorkInterval = ({
  dateBegin,
  dateEnd
}: WorkIntervalProps) => {
  const bDate = new Date(dateBegin);
  const eDate = new Date(dateEnd || currentDate);

  const dateString = calculateWorkInterval(bDate, eDate);

  if (dateEnd) {
    return (
      <>{`${formatDate(bDate)} - ${formatDate(eDate)} (${dateString})`}</>
    );
  }

  return (
    <>
      {`${formatDate(bDate)} - (по настоящее время > ${dateString})`}
    </>
  )
}
