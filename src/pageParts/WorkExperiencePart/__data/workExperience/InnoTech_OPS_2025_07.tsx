import { WorkExperienceDto } from 'src/types/dto';
import { COMPANIES } from '../constants/compaties';
import { H4 } from '../../../../ui';

export const InnoTech_OPS_2025_07: WorkExperienceDto = {
  ...COMPANIES.InnoTech,
  dateBegin: new Date('2025-07-16').toUTCString(),
  workPosition: "Ведущий разработчик",
  teamName: "ВТБ. Служба Сервисы управления учетно-операционными данными. Группа OPS 4",
  technologiesTags: [
    'Javascript', 'React', 'TypeScript', 'node', 'AdmiralDS', 'StyledComponents',
    'ModuleFederation', 'Сфера+', 'OpenAPI',
    'Webpack', 'Jest', 'JAVA'
  ],
  description: (
    <div>
      <H4 className="">Ключевые достижения:</H4>
      <ul className="list-disc space-y-4">
        <li className="flex items-start">
          Посильно улучшаю BE сервисы на JAVA
        </li>
        <li className="flex items-start">
          Разрабатываем интерфейсы
        </li>
      </ul>
    </div>
  )
}
