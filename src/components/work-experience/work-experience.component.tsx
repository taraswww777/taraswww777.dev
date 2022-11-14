import {isEmpty} from 'lodash';
import {loadWorkExperience} from 'src/resources/work-experience';
import {WorkExperienceDto} from 'src/types/dto';
import {useEffect, useState} from "react";
import {workIntervalComponent} from "../../utils";


export const WorkExperienceComponent = () => {
  const [workExperience, setWorkExperience] = useState<WorkExperienceDto[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const isMobile = () => (window.screen.width < 768)

  const isShowCloudTags = () => {
    return !isEmpty(tags) && !isMobile();
  }

  useEffect(() => {
    setWorkExperience(loadWorkExperience());

    workExperience.forEach(({technologiesTags}) => {
      setTags([...tags, ...technologiesTags]);
    });
  });

  return (
    <div className="row">
      <div className="col-12"><h2>Опыт работы</h2></div>
      {workExperience.map((item) => (
        <div className="card col-md-6 col-sm-12 col-lg-4 col-xxl-3 col-12 mb-4">
          <div className="card-body">
            <h5 className="card-title">
              {item.companyName}
            </h5>
            <p>
              <span className="badge bg-dark">
                {workIntervalComponent({...item})}
              </span>
            </p>

            {item.workPosition && (<p className="card-subtitle">{item.workPosition}</p>)}
            {item.teamName && (<p className="card-subtitle">{item.teamName}</p>)}
            <div className="card-text">{item.description}</div>
            <p>
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
                  <span className="badge bg-secondary me-1">{tag}</span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ))}
      {/*<div className="col-12 overflow-hidden">*/}
      {/*  <app-cloud-tags *ngIf="isShowCloudTags" [cloudTags]="tags"></app-cloud-tags>*/}
      {/*</div>*/}
    </div>
  );
}
