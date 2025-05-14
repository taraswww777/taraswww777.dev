import { getDiffDate } from '../../utils/getDiffDate';
import { formatDate } from '../../utils/formatDate';

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

  const { y, m } = getDiffDate(bDate, eDate);

  const dateString = `${y ? y + 'г ' : ''}${m ? m + 'м ' : ''}`.trim();

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
