import {WorkExperienceDto} from 'src/types/dto';

export const ResultSchool_2023_02: WorkExperienceDto = {
  "dateBegin": "2023-02-01T01:00:00.000Z",
  "companyName": "ИП Минин В. И. (Result School)",
  "companySite": "https://result.school/",
  "companySiteName": "result.school",
  "workPosition": "Куратор - преподаватель",
  "teamName": "Кураторы мидлов",
  "technologiesTags": [
    "Javascript", "React", "Typescript", "node", "HTML5", "CSS3", "webpack", "jest",
    "Notion", "GIT", "Docker", "RTKQuery", "Vite"
  ],
  description: (
    <>
      Обязанности:

      <ul className="m-0 p-0">
        <li>Сопровождение групп учеников в процессе обучения</li>
        <li>Урегулирование конфликтов между учениками и школой</li>
        <li>Объяснение сложных тем для учеников</li>
        <li>Проведение мастер классов</li>
        <li>Составление учебных материалов</li>
        <li>Проверка домашних работ</li>
      </ul>

      <p className="pt-2">
        За время преподавания успел выпустить 2 группы мидл специялистов.
        В настоящее время обучяю 3 группу.
      </p>
    </>
  )
}
