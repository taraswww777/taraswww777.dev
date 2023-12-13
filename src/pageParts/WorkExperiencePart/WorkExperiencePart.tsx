import {TECHNOLOGIES_TAGS, workExperienceList} from './__data';
import {WorkExperienceCard} from 'src/components/WorkExperienceCard';
import {MyTagCloud} from 'src/components/MyTagCloud';

export const WorkExperiencePart = () => {

  return (
    <div className="row">
      <div className="col-12"><h2>Опыт работы</h2></div>

      {workExperienceList.map((item) => (
        <WorkExperienceCard key={`${item.dateBegin}-${item.dateEnd}`} item={item} />
      ))}

      <div className="col-12 overflow-auto bg-gradient bg-dark d-print-none">
        <MyTagCloud tags={TECHNOLOGIES_TAGS} />
      </div>
    </div>
  );
}
