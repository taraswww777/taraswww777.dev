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
