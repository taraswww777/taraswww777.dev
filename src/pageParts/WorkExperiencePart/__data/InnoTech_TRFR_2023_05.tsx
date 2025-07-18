import { FaIcon } from 'src/ui/FaIcon';
import { WorkExperienceDto } from 'src/types/dto';
import { COMPANIES } from './constants/compaties';
import { NON_BREAKING_SPACE } from '../../../constants/common';
import { H4 } from '../../../ui';

export const InnoTech_TRFR_2023_05: WorkExperienceDto = {
  ...COMPANIES.InnoTech,
  dateBegin: new Date('2023-05-18').toUTCString(),
  dateEnd: new Date('2025-05-12').toUTCString(),
  workPosition: "Ведущий разработчик (React/Angular)",
  teamName: "ВТБ. Служба Тарифы и аналитические данные",
  technologiesTags: [
    'Javascript', 'React', 'TypeScript', 'node', 'HTML5', 'CSS3', 'StyledComponents',
    'Bitbucket', 'TeamCity', 'Confluence', 'Сфера+', 'OpenAPI',
    'Angular', 'Kubernetes', 'ModuleFederation', 'Webpack', 'Jest'
  ],
  description: (
    <div>
      <H4 className="">Ключевые достижения:</H4>
      <ul className="list-disc space-y-4">
        <li className="flex items-start">
          Реорганизовал legacy-код в модульную систему, совмещая роли архитектора и наставника команды.
        </li>
        <li className="flex items-start">
          Получил признание за "способность решать задачи с нулевой экспертизой" (фидбек коллег).
        </li>
        <li className="flex items-start">
          <div>
            <p>
              <FaIcon iconName={'fas fa-exchange-alt'} />{NON_BREAKING_SPACE}
              <strong>Миграция UI информационной системы</strong> с Angular на React:
            </p>
            <ul className="list-disc pl-5 space-y-0.5 mt-2">
              <li>Перенес 13+ комплексных отчетов без ТЗ</li>
              <li>Перенес модуль Массовые операции над тарифами</li>
              <li>Перенес модуль Продукты</li>
              <li>Внедрил Module Federation для микрофронтендов</li>
              <li>Сократил время сборки на 40% через оптимизацию Webpack</li>
            </ul>
          </div>
        </li>

        <li className="flex items-start">
          <div>
            <p>
              <FaIcon iconName={'fas fa-archway'} />{NON_BREAKING_SPACE}
              <strong>Устранение архитектурных проблем</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-0.5 mt-2">
              <li>Унифицировал зависимости (единый <code>package.json</code>)</li>
              <li>Стандартизировал lint-правила (единый <code>.eslintrc</code>)</li>
              <li>Консолидировал конфигурации Webpack</li>
              <li>Внедрил использования кодогенерации OpenAPI</li>
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
              <li>Замещал FE-лида: проводил собеседования, онбординг 5+ разработчиков</li>
              <li>Оптимизировал процесс код-ревью (сократил с 2 ревью до 1 ревью на задачу)</li>
              <li>Оптимизировал GitFlow: сократил процессные затраты на 35% (3→2 билда, 2→1 PR на задачу)</li>
              <li>Внедрил feature flags для безопасного деплоя</li>
            </ul>
          </div>
        </li>
      </ul>

    </div>
  )
}
