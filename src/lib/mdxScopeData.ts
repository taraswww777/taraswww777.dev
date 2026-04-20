import { LINKS } from 'src/constants/links';
import { STATUSES } from 'src/types/statses';
import { HL_TYPE } from 'src/ui';

/** Данные для scope MDX (без React-компонентов) — можно передать в getStaticProps. */
export function getMdxDataScope() {
  return { LINKS, STATUSES, HL_TYPE };
}
