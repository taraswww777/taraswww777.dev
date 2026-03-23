# pages-management-plan-04: страница списка статей (index)

> Часть плана: `docs/cursorLog/pages-management-plan.md`  
> Обзор: `pages-management-plan-00-overview.md`  
> Предыдущая: `pages-management-plan-03-dynamic-route.md`  
> Следующая: `pages-management-plan-05-api-routes.md`

---

## Задача

Заменить `src/pages/articles/index.mdx` на `src/pages/articles/index.tsx`, который показывает список статей из манифеста (только published, сортировка по publishedAt).

---

## Условия

1. `getPublishedArticles()` из `src/lib/pagesManifest.ts` возвращает опубликованные статьи.
2. Текущая страница использует `VerticalNav` и `linksToVerticalNavItems(LINKS.articles)`.
3. Новый список — массив `{ link, title }[]` из манифеста.

---

## Действия

1. Создать `src/pages/articles/index.tsx`:
   - `getStaticProps` → `getPublishedArticles()`, передать в props.
   - Рендер с `VerticalNav` или аналогичным компонентом, items = `{ [link]: title }`.
2. Удалить `src/pages/articles/index.mdx`.
3. Убедиться, что `/articles` ведёт на новую страницу и отображает только published.

---

## Выполнено

- Создан `src/pages/articles/index.tsx` с `getStaticProps` → `getPublishedArticles()`
- items для VerticalNav формируются как `Record<'/articles/${slug}', title>`
- Удалён `src/pages/articles/index.mdx`
- Сохранена структура: MdxLayout, MetaHead, PageTemplate, ContentContainer, VerticalNav
- Draft-статьи не отображаются (только published из манифеста)
