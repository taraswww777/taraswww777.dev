# pages-management-plan-01: манифест и типы

> Часть плана: `docs/cursorLog/pages-management-plan.md`  
> Обзор: `pages-management-plan-00-overview.md`  
> Следующая: `pages-management-plan-02-content-migration.md`

---

## Задача

Создать манифест страниц и утилиты для его чтения. Манифест — единый источник истины для статей.

---

## Формат манифеста

**Путь:** `content/pages-manifest.json`

```json
{
  "articles": {
    "2025-03-14-js-symbol-keys-iteration": {
      "slug": "2025-03-14-js-symbol-keys-iteration",
      "title": "Итерация объектов с Symbol-ключами в JavaScript",
      "status": "published",
      "publishedAt": "2025-03-14"
    }
  }
}
```

- Без `version`
- Имя файла = `{slug}.mdx` (1:1)
- `publishedAt` — `YYYY-MM-DD` или пустая строка для черновиков
- Статусы: `published`, `unpublished`, `in_progress`, `draft`

---

## Действия

1. Создать `content/pages-manifest.json` на основе `src/constants/links.ts` — текущие статьи как `published`, `publishedAt` из даты в slug или из контента.
2. Создать `src/lib/pagesManifest.ts`:
   - типы `ArticleManifestEntry`, `PagesManifest`
   - `getPagesManifest(): Promise<PagesManifest>`
   - `getPublishedArticles(): Promise<ArticleManifestEntry[]>` — только `status === 'published'`, сортировка по `publishedAt` desc
   - `getArticleBySlug(slug: string): Promise<ArticleManifestEntry | undefined>`

---

## Референс: links.ts

Текущий источник: `src/constants/links.ts`. При генерации манифеста использовать его для title и slug (из link).

---

## Выполнено (2026-03-23)

**Уточнения по реализации:**

1. **publishedAt** — везде извлечено из slug (паттерн `YYYY-MM-DD-` в начале). Чтение из frontmatter MDX не потребовалось — все slug в links.ts содержат дату.

2. **Структура проекта** — создана директория `src/lib/` (ранее отсутствовала).

3. **Orphan MDX** — файлы `2023-frontend-conf-1.mdx` и `2023-frontend-conf-2.mdx` есть в `src/pages/articles/`, но соответствующие пункты в links.ts закомментированы (frontendConfDay1, frontendConfDay2). В манифест они не включены (использован только links.ts). В части 02 при миграции нужно решить: добавить как draft в манифест или оставить вне манифеста.

4. **Сортировка** — `getPublishedArticles()` сортирует по `publishedAt` desc. Пустая строка `publishedAt` у draft-записей при сортировке идёт последней (`''.localeCompare('2025-03-14')` даёт пустая строка «меньше»).
