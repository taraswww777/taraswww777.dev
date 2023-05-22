import {formatDate, getDiffDate} from "../../utils";

interface WorkIntervalProps {
  dateBegin: string;
  dateEnd: string;
}

export const WorkInterval = ({
  dateBegin, dateEnd
}: WorkIntervalProps) => {
  const bDate = new Date(dateBegin);
  const eDate = new Date(dateEnd);

  const {y, m} = getDiffDate(bDate, eDate);

  return (
    <>
      {`${formatDate(bDate)} - ${formatDate(eDate)} (${y ? y + 'г ' : ''}${m || 0}м)`}
    </>
  )
}
