# pages-management-plan: обзор и навигация по частям

> Составлен: 2026-03-23  
> Полный план: `docs/cursorLog/pages-management-plan.md`

---

## Контекст

Next.js 14 + MDX, `output: 'export'`. Сейчас ссылки в `src/constants/links.ts`, MDX в `src/pages/articles/*.mdx`. Нужно: статусы страниц, манифест, админка, создание/переименование с автообновлением ссылок.

---

## Цели

- Статусы: `published`, `unpublished`, `in_progress`, `draft` (по умолчанию при создании)
- Только `published` в production
- Манифест `content/pages-manifest.json`
- Админка только для dev, исключается из prod
- Создание, переименование страниц, автообновление ссылок

---

## Части плана (порядок выполнения)

| Файл | Содержание |
|------|------------|
| `pages-management-plan-01-manifest` | Манифест, формат, типы, утилиты чтения |
| `pages-management-plan-02-content-migration` | Перенос MDX в content/articles |
| `pages-management-plan-03-dynamic-route` | Dynamic route [slug].tsx, getStaticPaths |
| `pages-management-plan-04-articles-index` | Страница списка статей index.tsx |
| `pages-management-plan-05-api-routes` | API для чтения/записи манифеста |
| `pages-management-plan-06-admin-page` | Админ-страница + postbuild |
| `pages-management-plan-07-create-rename` | Создание и переименование с автообновлением ссылок |
| `pages-management-plan-08-sitemap-links` | Sitemap только published + миграция links.ts |

---

## Соглашения по именованию частей

Формат: `{sourceName}-{numberPart}-{namePart}.md`

- `sourceName` — имя основного плана (например, `pages-management-plan`)
- `numberPart` — порядковый номер (00, 01, 02…)
- `namePart` — краткое описание части
