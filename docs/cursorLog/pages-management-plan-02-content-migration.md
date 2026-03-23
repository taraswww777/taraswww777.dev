# pages-management-plan-02: перенос MDX в content/articles

> Часть плана: `docs/cursorLog/pages-management-plan.md`  
> Обзор: `pages-management-plan-00-overview.md`  
> Предыдущая: `pages-management-plan-01-manifest.md`  
> Следующая: `pages-management-plan-03-dynamic-route.md`

---

## Задача

Перенести MDX-файлы из `src/pages/articles/*.mdx` в `content/articles/`. Имя файла = slug (например `2025-03-14-js-symbol-keys-iteration.mdx`).

---

## Условия

1. Манифест `content/pages-manifest.json` уже создан и содержит slug всех статей.
2. Соответствие файл↔slug: `{slug}.mdx` в `content/articles/`.
3. Файлы `2023-frontend-conf-1.mdx`, `2023-frontend-conf-2.mdx` и т.п. нужно переименовать по slug из манифеста (если slug там другой — синхронизировать).

---

## Действия

1. Создать директорию `content/articles/`.
2. Скопировать или переместить все `.mdx` из `src/pages/articles/` в `content/articles/`.
3. Убедиться, что имена файлов совпадают со slug в манифесте (переименовать при необходимости).
4. Удалить статьи из `src/pages/articles/` (оставить только `index.mdx` до следующего этапа, либо заменить на `index.tsx` позже).
5. Не трогать `src/pages/articles/index.mdx` — его заменит `index.tsx` в этапе 04.

---

## Структура после миграции

```
content/
  articles/
    2025-03-14-js-symbol-keys-iteration.mdx
    2025-03-18-package-json-contributors.mdx
    ...
  pages-manifest.json
```

---

## Выполнено (2026-03-23)

**Уточнения по реализации:**

1. **Orphan MDX** — файлы `2023-frontend-conf-1.mdx` и `2023-frontend-conf-2.mdx` переименованы в `2023-10-01-frontend-conf-day-1.mdx` и `2023-10-01-frontend-conf-day-2.mdx` и добавлены в манифест как `draft` (по закомментированным ссылкам в links.ts).

2. **Пути импорта** — все относительные импорты `../../app/`, `../../components/`, `../../constants/` заменены на `src/...` (baseUrl), т.к. из `content/articles/` старые пути ломаются.

3. **index.mdx** — оставлен в `src/pages/articles/`; заменится на `index.tsx` в части 04.
