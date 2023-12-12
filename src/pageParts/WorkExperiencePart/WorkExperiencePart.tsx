import {workExperienceList} from './__data';
import {WorkExperienceCard} from 'src/components/WorkExperienceCard';


export const WorkExperiencePart = () => {

  return (
    <div className="row">
      <div className="col-12"><h2>Опыт работы</h2></div>

      {workExperienceList.map((item) => (
        <WorkExperienceCard key={`${item.dateBegin}-${item.dateEnd}`} item={item} />
      ))}
    </div>
  );
}
