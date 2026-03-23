# План: управление доступностью и жизненным циклом страниц

> Составлен: 2026-03-23  
> Контекст: `src/constants/links.ts`, Next.js 14 + MDX, `output: 'export'`

---

## 1. Цели

- Управление статусами страниц (опубликовано, снято с публикации, в работе, черновик)
- Только `published` показывается в production
- Манифест в `content/pages-manifest.json` как единый источник истины
- Админ-страница только для разработки (исключается из prod-сборки)
- Создание, переименование страниц и автообновление ссылок

---

## 2. Утверждённые решения

| # | Вопрос | Решение |
|---|--------|---------|
| 1 | Размещение админки | В основном проекте, исключение из prod через postbuild-скрипт |
| 2 | Неопубликованные страницы | Сначала Вариант B (не собирать), при неудаче — Вариант A |
| 3 | Сортировка статей | По `publishedAt` |
| 4 | Разделы | Только `articles` |
| 5 | Шаблон новой страницы | Frontmatter + заглушка `# {title}` + пара строк текста |
| 6 | Обновление ссылок при переименовании | Автоматизировать |
| 7 | Dev API | Админка в том же проекте |

---

## 3. Статусы страниц

| Статус | Значение | Видимость в prod |
|--------|----------|------------------|
| `published` | Опубликовано | Да |
| `unpublished` | Снято с публикации | Нет |
| `in_progress` | В работе | Нет |
| `draft` | Черновик | Нет |

При создании страницы по умолчанию — `draft`.

---

## 4. Формат манифеста

**Путь:** `content/pages-manifest.json`

```json
{
  "articles": {
    "2025-03-14-js-symbol-keys-iteration": {
      "slug": "2025-03-14-js-symbol-keys-iteration",
      "title": "Итерация объектов с Symbol-ключами в JavaScript",
      "status": "published",
      "publishedAt": "2025-03-14"
    },
    "2023-10-01-frontend-conf-day-1": {
      "slug": "2023-10-01-frontend-conf-day-1",
      "title": "FrontendConf 2023 день 1",
      "status": "draft",
      "publishedAt": ""
    }
  }
}
```

- Без поля `version`
- Имя файла = `{slug}.mdx` (связь 1:1)
- `publishedAt` — дата в формате `YYYY-MM-DD`, пустая строка для черновиков

---

## 5. Техническая архитектура

### 5.1. Текущее состояние

- Next.js 14, `output: 'export'`
- MDX в `src/pages/articles/*.mdx`
- `src/constants/links.ts` — ручной объект ссылок
- Список статей: `linksToVerticalNavItems(LINKS.articles)` на `/articles`
- Sitemap сканирует `out/` после сборки

### 5.2. Целевое состояние (Вариант B)

| Было | Станет |
|------|--------|
| `src/pages/articles/2025-03-14-js-symbol-keys-iteration.mdx` | `content/articles/2025-03-14-js-symbol-keys-iteration.mdx` |
| MDX-файл = страница Next.js | Dynamic route: `src/pages/articles/[slug].tsx` |
| Все MDX попадают в билд | Только published из манифеста — в `getStaticPaths` |
| `pages/index.mdx` для `/` | `app/page.tsx` для `/` (конфликт при наличии app/layout) |

**next-mdx-remote:** `blockJS: false` в serialize, иначе удаляются JS-выражения в атрибутах (pubdate, LINKS и т.д.). Страница [slug] должна импортировать CSS (globals, mdxContent, highlightjs), т.к. MdxLayout используется только в getStaticProps. **Подсветка кода:** из-за `dangerouslySetInnerHTML` клиентский `hljs.highlightAll()` не работает; используется `rehype-highlight` (подсветка при сборке).

### 5.3. Dev vs Prod

| Режим | API routes | Админка | Манифест |
|-------|------------|---------|----------|
| `next dev` | Работают | `/admin` доступна | читается и пишется через API |
| `next build` | Не экспортируются | удаляется postbuild | читается при билде |

---

## 6. Исключение админки из production

Next.js не умеет исключать страницы из static export. Решение: **postbuild-скрипт**:

```
next build → out/ → postbuild: rm -rf out/admin → sitemap
```

```json
"build": "next build && node scripts/postbuild-exclude-admin.js"
```

---

## 7. Шаблон новой страницы

При создании страницы создаётся файл:

```yaml
---
slug: {slug}
title: {title}
pubdate: {YYYY-MM-DD}
---

# {title}

Здесь будет контент...
```

---

## 8. Автообновление ссылок при переименовании

При смене slug API выполняет:

1. Переименование `content/articles/{oldSlug}.mdx` → `content/articles/{newSlug}.mdx`
2. Обновление манифеста
3. Обход всех MDX в `content/articles/*.mdx` и замена `/articles/{oldSlug}` → `/articles/{newSlug}`

---

## 9. Структура проекта (целевая)

```
content/
  articles/
    2025-03-14-js-symbol-keys-iteration.mdx
    ...
  pages-manifest.json

src/
  app/
    layout.tsx
    page.tsx                 # главная / (при наличии app/layout нужен app/page)
    MdxLayout.tsx
  pages/
    admin/
      index.tsx
    api/
      pages-manifest/
        route.ts             # GET, PATCH (только в dev)
    articles/
      [slug].tsx             # dynamic route, импорт globals/mdxContent/highlightjs.css
      index.tsx
  lib/
    pagesManifest.ts
    mdxUtils.ts

scripts/
  postbuild-exclude-admin.js
```

### Уточнения (по результатам внедрения)

- **app/page.tsx и pages/index.mdx** — при наличии `app/layout.tsx` Next.js ожидает `app/page.tsx` для маршрута `/`. Файл `pages/index.mdx` конфликтует (ошибка "Conflicting app and page file"). Решение: удалить `pages/index.mdx`, перенести главную в `app/page.tsx`.

---

## 10. Этапы внедрения и части плана

План разбит на отдельные файлы для пошаговой работы в Cursor. Обзор: `docs/cursorLog/pages-management-plan-00-overview.md`.

| # | Файл | Содержание |
|---|------|------------|
| 1 | `pages-management-plan-01-manifest` | Манифест, формат, типы, утилиты |
| 2 | `pages-management-plan-02-content-migration` | Перенос MDX в content/articles |
| 3 | `pages-management-plan-03-dynamic-route` | Dynamic route [slug].tsx |
| 4 | `pages-management-plan-04-articles-index` | Страница списка index.tsx |
| 5 | `pages-management-plan-05-api-routes` | API для манифеста |
| 6 | `pages-management-plan-06-admin-page` | Админка + postbuild |
| 7 | `pages-management-plan-07-create-rename` | Создание и переименование |
| 8 | `pages-management-plan-08-sitemap-links` | Sitemap + миграция links.ts |

---

## 11. Fallback: Вариант A

Если Вариант B окажется слишком сложным:

- Все MDX продолжают билдиться (остаются в `src/pages/articles/` или переносятся в `content/`)
- Список статей на `/articles` и sitemap фильтруют по `status === 'published'`
- Неопубликованные страницы по-прежнему доступны по прямой ссылке (не индексируются, не видны в навигации)
