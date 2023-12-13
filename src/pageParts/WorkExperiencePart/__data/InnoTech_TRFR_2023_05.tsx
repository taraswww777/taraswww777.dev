import {FaIcon} from 'src/components/fa-icon';
import {WorkExperienceDto} from 'src/types/dto';
import {COMPANIES} from './constants/compaties';

export const InnoTech_TRFR_2023_05: WorkExperienceDto = {
  ...COMPANIES.InnoTech,
  dateBegin: new Date('2023-05-18').toUTCString(),
  workPosition: "Ведущий разработчик",
  teamName: "ВТБ. Служба Тарифы и аналитические данные",
  technologiesTags: [
    "Javascript", "React", "Typescript", "node", "HTML5", "CSS3", "StyledComponents", "webpack", "jest",
    "ModuleFederation", "Bitbucket", "TeamCity", "Confluence", "Сфера+", "Angular", "styled-components"
  ],
  description: (
    <>
      <p>Основной задачей на проекте был переезд с Angular на React.</p>
      <p>
        В рамках работы над проектом были детерминированы архитектурные слабые места, во фронтовом приложении, и составлен план работ,
        для устранения / нивелирования слабых мест.
      </p>
      <p>
        За время работ удалось устранить:
      </p>
      <ul className="m-0 p-0">
        <li>расcинхрон версий в <code>package.json</code> <FaIcon iconName={'fa-solid fa-right-long'} /> сделали единый <code>package.json</code></li>
        <li>расcинхрон правил <code>.eslintrc</code> <FaIcon iconName={'fa-solid fa-right-long'} /> сделали единый <code>.eslintrc</code></li>
        <li>много вариаций <code>webpack-config.js</code> <FaIcon iconName={'fa-solid fa-right-long'} /> пока вынесены общие, одинаковые части</li>
      </ul>
      <p>
        Так же в период отсутствия FE лида, довелось его замещать.
        В том числе проводить собеседования FE разработчиков.
      </p>
    </>
  )
}
