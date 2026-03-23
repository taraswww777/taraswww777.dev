# pages-management-plan-08: sitemap и миграция links.ts

> Часть плана: `docs/cursorLog/pages-management-plan.md`  
> Обзор: `pages-management-plan-00-overview.md`  
> Предыдущая: `pages-management-plan-07-create-rename.md`

---

## Задача

1. Генерировать sitemap только для published страниц.
2. Мигрировать использование `links.ts` на манифест и при необходимости удалить `links.ts`.

---

## Sitemap

Текущий sitemap (`scripts/sitemap-generator.js`) сканирует `out/`. При Варианте B в `out/` попадают только published, поэтому sitemap уже корректен.

Если потребуется явная фильтрация: передать в sitemap-generator список published из манифеста и включить только эти пути. Или постобработка sitemap.xml: удалить строки с путями, которых нет в манифесте как published.

---

## Миграция links.ts

1. MDX и компоненты используют `LINKS.articles.xxx` для `ogCanonicalUrl`, внутренних ссылок. Заменить на получение из манифеста по slug.
2. Для статей: `getArticleBySlug(slug)` → `link`, `title`. В [slug].tsx slug известен, метаданные подставляются из манифеста.
3. Оставить в `links.ts` только `home`, `articlesIndex` (если нужны), либо полностью удалить и заменить на константы/манифест.
4. Обновить все импорты в MDX и компонентах.

---

## Fallback: Вариант A

Если динамический роут окажется слишком сложным: все MDX по-прежнему билдятся, sitemap фильтрует по манифесту — в скрипт sitemap передать только published пути.

---

## Выполнено

- **Sitemap** — добавлен `ignoredPaths: ['admin', 'admin.html']` (postbuild уже удаляет, но на случай ручного запуска sitemap).
- **Scope MDX** — в `compileMdxFile(slug, article)` добавлены `ARTICLE` (link, title текущей страницы) и `ARTICLES` (map slug→{link, title} для кросс-ссылок).
- **MDX** — все `ogCanonicalUrl={LINKS.articles.xxx.link}` заменены на `ogCanonicalUrl={ARTICLE.link}`; `title`/`metaTitle` из LINKS — на `ARTICLE.title`; внутренняя ссылка — на `ARTICLES['slug'].link`.
- **links.ts** — оставлены только `home` и `articlesIndex`; секция `articles` удалена.
- **renameArticle** — убрано обновление links.ts; добавлена замена `ARTICLES['oldSlug']` → `ARTICLES['newSlug']` в MDX.
