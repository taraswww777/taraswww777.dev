import {WorkExperienceDto} from 'src/types/dto';
import {FC} from "react";
import {WorkInterval} from "./WorkInterval";
import {EMPTY_SPACE} from 'src/constants/common';

interface WorkExperienceProps {
  item: WorkExperienceDto
}

export const WorkExperienceCard: FC<WorkExperienceProps> = ({item}) => (
  <section
    key={`${item.dateBegin}-${item.dateEnd}`}
    className="card col-md-6 col-sm-12 col-lg-6 col-xxl-4 col-12 mb-2 print-page-break"
  >
    <div className="card-body">
      <h5 className="card-title">
        {item.companyName}
        {item.companySite && (
          <>
            {EMPTY_SPACE}
            <a target="_blank" title={item.companyName} className="text-black" href={item.companySite}>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </>
        )}
      </h5>
      <p className="card-subtitle pt-2">
        <span className="badge bg-dark">
          <WorkInterval dateBegin={item.dateBegin} dateEnd={item.dateEnd} />
        </span>
      </p>

      {item.workPosition && (<p className="card-subtitle pt-2"><b>{item.workPosition}</b></p>)}
      {item.teamName && (<p className="card-subtitle pt-2"><i>{item.teamName}</i></p>)}
      <div className="card-text pt-3">{item.description}</div>
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
  </section>
);
