import { FaIcon } from 'src/ui/FaIcon';
import { WorkExperienceDto } from 'src/types/dto';
import { COMPANIES } from '../../constants/compaties';
import { NON_BREAKING_SPACE } from '../../../../../constants/common';
import { H4 } from '../../../../../ui';

export const InnoTech_TRFR_2025_05: WorkExperienceDto = {
  ...COMPANIES.InnoTech,
  dateBegin: new Date('2025-05-26').toUTCString(),
  dateEnd: new Date('2025-07-15').toUTCString(),
  workPosition: "Ведущий разработчик",
  teamName: "ВТБ. Группа Управление группами Семейного банка",
  technologiesTags: [
    'Javascript', 'React', 'TypeScript', 'node', 'HTML5', 'CSS3', 'omega-ui', 'stitches',
    'ModuleFederation', 'Сфера+', 'OpenAPI',
    'Webpack', 'Jest', 'HealthChecks'
  ],
  description: (
    <div>
      <H4 className="">Ключевые достижения:</H4>
      <ul className="list-disc space-y-4">
        <li className="flex items-start">
          Под моим началом выполнили почти все работы по разработке интерфейса нового сервиса "Молодёжный сервис"
        </li>

        <li className="flex items-start">
          <div>
            <p>
              <FaIcon iconName={'fas fa-plus'} />{NON_BREAKING_SPACE}
              <strong>Разработка сервиса "Молодёжный сервис"</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-0.5 mt-2">
              <li>Внедрил кодогенерацию на основании OpenAPI: типов, ApiClient, мок сервер</li>
              <li>Внедрил использование HealthChecks</li>
            </ul>
          </div>
        </li>

        <li className="flex items-start">
          <div>
            <p>
              <FaIcon iconName={'fas fa-users'} />{NON_BREAKING_SPACE}
              <strong>Техническое лидерство</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-0.5 mt-2">
              <li>Проводил онбоардинг нового фронт разработчика</li>
              <li>Улучшил процесс планирования команды на спринт</li>
              <li>Познакомил команду с актуальным подходом при работе с HealthChecks</li>
            </ul>
          </div>
        </li>
      </ul>

    </div>
  )
}
