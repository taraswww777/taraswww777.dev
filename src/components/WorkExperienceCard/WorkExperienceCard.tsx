import { WorkExperienceDto } from 'src/types/dto';
import { FC } from "react";
import { WorkInterval } from "./WorkInterval";
import { NON_BREAKING_SPACE } from 'src/constants/common';
import { Badge } from '../../ui';
import { Card } from '../../ui';
import { STATUSES } from '../../types/statses';

interface WorkExperienceProps {
  item: WorkExperienceDto
}

export const WorkExperienceCard: FC<WorkExperienceProps> = ({ item }) => (
  <Card
    type={item.dateEnd ? STATUSES.secondary : STATUSES.success}
    title={
      <h5 className="text-center font-bold">
        {item.companySite ? (
          <a
            className="text-colorTextPrimary hover:text-colorTextPrimary hover:underline"
            target="_blank"
            title={item.companyName}
            href={item.companySite}
          >
            {item.companyName}{NON_BREAKING_SPACE}
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        ) : item.companyName}
      </h5>
    }
    footer={(item.technologiesTags.length > 0) ? (
      <div className="flex flex-wrap justify-between gap-1">
        {item.technologiesTags.map((tag) => (
          <Badge type={STATUSES.info} key={tag}>{tag}</Badge>
        ))}
      </div>
    ) : null}
  >
    <div className="text-sm font-bold text-center">
      <Badge type={STATUSES.info}>
        <WorkInterval dateBegin={item.dateBegin} dateEnd={item.dateEnd} />
      </Badge>
    </div>

    {item.workPosition && (<p className="card-subtitle pt-2"><b>{item.workPosition}</b></p>)}
    {item.teamName && (<p className="card-subtitle pt-2"><i>{item.teamName}</i></p>)}
    <div className="card-text pt-3">{item.description}</div>
  </Card>
);
