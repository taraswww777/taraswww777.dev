export enum PAGE_NAMES {
  HOME = 'HOME',
  ARTICLES = 'ARTICLES',
  ARTICLES_ITEM = 'ARTICLES_ITEM',
}

type PageParams = Record<string, string | number>;

const PAGE_URLS: Record<PAGE_NAMES, (params?: PageParams) => string> = {
  [PAGE_NAMES.HOME]: () => '/',
  [PAGE_NAMES.ARTICLES]: () => '/articles',
  [PAGE_NAMES.ARTICLES_ITEM]: ({id} = {}) => `/articles/${id}`
}

export const getPageUrl = (pageName: PAGE_NAMES) => PAGE_URLS[pageName];
