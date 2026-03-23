# pages-management-plan-03: dynamic route [slug].tsx

> Часть плана: `docs/cursorLog/pages-management-plan.md`  
> Обзор: `pages-management-plan-00-overview.md`  
> Предыдущая: `pages-management-plan-02-content-migration.md`  
> Следующая: `pages-management-plan-04-articles-index.md`

---

## Задача

Создать dynamic route `src/pages/articles/[slug].tsx`, который:
- в `getStaticPaths` возвращает только published из манифеста;
- в `getStaticProps` читает `content/articles/{slug}.mdx`, компилирует MDX и рендерит.

---

## Условия

1. MDX уже в `content/articles/*.mdx`.
2. Манифест и `getPublishedArticles()` из `src/lib/pagesManifest.ts` готовы.
3. Использовать те же MDX-опции, что в проекте: `remark-gfm`, `@mdx-js/react`, MdxLayout, MdxTemplate и т.д.

---

## Действия

1. Создать `src/pages/articles/[slug].tsx`:
   - `getStaticPaths`: `paths` из `getPublishedArticles()` → `{ params: { slug } }`;
   - `getStaticProps`: прочитать файл, скомпилировать MDX (через `next-mdx-remote` или `@next/mdx` + serialize), передать компонент и метаданные в props.
2. Адаптировать рендер под текущий MdxTemplate/MdxLayout (frontmatter или манифест для title, pubdate, ogCanonicalUrl).
3. Удалить все `*.mdx` из `src/pages/articles/` (кроме index, если ещё не заменён).

---

## Референс

Текущие MDX используют `MdxLayout`, `MdxTemplate`, `MetaHead`, `LINKS`. Метаданные можно брать из манифеста или frontmatter MDX.
