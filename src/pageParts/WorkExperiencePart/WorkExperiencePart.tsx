import { TECHNOLOGIES_TAGS, workExperienceList } from './__data';
import { WorkExperienceCard } from 'src/components/WorkExperienceCard';
import { MyTagCloud } from 'src/components/MyTagCloud';
import { WorkExperience } from './workExperience';

export const WorkExperiencePart = () => {
  return (
    <div className="w-full flex flex-wrap gap-x-2">
      <h2 className="text-xl font-bold">Опыт работы <WorkExperience /></h2>

      <div className="w-full mt-4 flex-wrap flex gap-4 flex-row">
        {workExperienceList.map((item) => (
          <div
            key={`${item.dateBegin}-${item.dateEnd}`}
            className="mb-2
            w-full
            lg:basis-[calc(50%-0.5*1rem)] lg:w-auto
            shrink-0 overflow-auto print:break-before-page"
          >
            <WorkExperienceCard key={`${item.dateBegin}-${item.dateEnd}`} item={item} />
          </div>
        ))}
      </div>

      <div className="w-full overflow-hidden print:hidden my-4">
        <MyTagCloud tags={TECHNOLOGIES_TAGS} />
      </div>
    </div>
  );
}
