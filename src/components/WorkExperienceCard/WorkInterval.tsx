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

  const {y, m} = getDiffDate(bDate, eDate);

  if (dateEnd) {
    return (
      <>{`${formatDate(bDate)} - ${formatDate(eDate)} (${y ? y + 'г ' : ''}${m || 0}м)`}</>
    );
  }

  return (
    <>
      {`${formatDate(bDate)} - (по настоящее время > ${y ? y + 'г ' : ''}${m || 0}м)`}
    </>
  )
}
