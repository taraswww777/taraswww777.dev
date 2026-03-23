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

---

## Выполнено (2026-03-23)

**Уточнения по реализации:**

1. **next-mdx-remote** — scope с функциями нельзя сериализовать в props. Решение: рендер в `getStaticProps` через `renderToStaticMarkup(MDXRemote)`, возврат `{ html }`, страница использует `dangerouslySetInnerHTML`.

2. **Импорты в MDX** — next-mdx-remote удаляет их плагином. Пути `../../` заменены на `src/` в части 02. Вызов `stripImportsFromMdx()` избыточен (плагин уже убирает), но оставлен для ясности.

3. **Scope vs components** — `scope` в `serialize()` для LINKS, STATUSES (данные). `components` в MDXRemote — только React-компоненты (MdxLayout, MdxTemplate и т.д.). LINKS в scope, компоненты — в `getMdxComponents()`.

4. **blockJS: false** — плагин `removeJavaScriptExpressions` по умолчанию удаляет атрибуты с выражениями (`pubdate={'2025-03-14'}`, `ogCanonicalUrl={LINKS.articles.xxx.link}`). Из‑за этого pubdate становился undefined и formatDate давал "aN.aN.NaN". Решение: передать `blockJS: false` в `serialize()`, при этом `blockDangerousJS` остаётся и блокирует eval/Function.

5. **formatDate** — добавить проверку `Number.isNaN(date.getTime())` и возвращать пустую строку при невалидной дате.

6. **Стили на [slug]** — MdxLayout (импортирует globals.css, mdxContent.css, highlightjs.css) используется только в `getStaticProps`, не в клиентском дереве. Поэтому CSS не попадал в бандл страницы. Решение: явно импортировать эти CSS в `[slug].tsx`.

7. **Удаление MDX** — статьи удалены в части 02. В `src/pages/articles/` остались `index.mdx` (список) и `[slug].tsx`.

8. **Подсветка кода** — контент вставляется через `dangerouslySetInnerHTML`; скрипты из MetaHead (`hljs.highlightAll()`) не выполняются (браузер не выполняет script при вставке через innerHTML). Решение: `rehype-highlight` в `rehypePlugins` — подсветка на этапе сборки. Стили из `highlightjs.css`.
