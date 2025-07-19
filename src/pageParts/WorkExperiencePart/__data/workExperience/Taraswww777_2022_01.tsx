import { WorkExperienceDto } from 'src/types/dto';
import { FaIcon } from '../../../../ui/FaIcon';

export const Taraswww777_2022_02: WorkExperienceDto = {
  "dateBegin": "2022-02-24T01:00:00.000Z",
  "companyName": "taraswww777",
  "companySite": "https://taraswww777.dev/",
  "companySiteName": "taraswww777.dev",
  "workPosition": "Сам себе хозяин",
  "technologiesTags": [
    "Javascript", "React", "Typescript", "HTML5", 'PostCss', "CSS3", "webpack", 'swc',
    "GIT", 'NextJS', 'Angular2', "Vite", 'Tailwindcss'
  ],
  description: (
    <>
      <p>
        Ставлю эксперименты над изучаемыми технологиями.
      </p>
      <p>
        Сначала написал сайт на Angular и Bootstrap5,
        но изза отсутствия возможности индексации поисковиками
        и лишней сложности на страницах перевёл сайт на NextJS.
      </p>
      <p>
        Далее захотелось попробовать tailwindcss, и у меня получилось его освоить за пару дней.
        Правда пришлось перевести NextJS@13 <FaIcon iconName={'fa-solid fa-right-long'} /> NextJS@14.
      </p>
    </>
  )
}
