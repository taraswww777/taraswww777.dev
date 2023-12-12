import {WorkExperienceDto} from 'src/types/dto';
import {FC} from "react";
import {WorkInterval} from "./WorkInterval";

interface WorkExperienceProps {
  item: WorkExperienceDto
}

export const WorkExperienceCard: FC<WorkExperienceProps> = ({item}) => (
  <div
    key={`${item.dateBegin}-${item.dateEnd}`}
    className="card col-md-6 col-sm-12 col-lg-4 col-xxl-3 col-12 mb-2"
  >
    <div className="card-body">
      <h5 className="card-title">
        {item.companyName}
      </h5>
      <p>
        <span className="badge bg-dark">
          <WorkInterval dateBegin={item.dateBegin} dateEnd={item.dateEnd} />
        </span>
      </p>

      {item.workPosition && (<p className="card-subtitle"><b>{item.workPosition}</b></p>)}
      {item.teamName && (<p className="card-subtitle"><i>{item.teamName}</i></p>)}
      <div className="card-text pt-3">{item.description}</div>
      <p className="pt-2">
        {item.companySite && (
          <a target="_blank" href={item.companySite}>
            {item.companySiteName || item.companySite}
          </a>
        )}
      </p>
    </div>

    <div className="card-footer">
      {(item.technologiesTags.length > 0) ? (
        <div>
          {item.technologiesTags.map((tag) => (
            <span key={tag} className="badge bg-secondary me-1">{tag}</span>
          ))}
        </div>
      ) : null}
    </div>
  </div>
);
