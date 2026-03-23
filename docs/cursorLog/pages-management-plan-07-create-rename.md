# pages-management-plan-07: создание и переименование страниц

> Часть плана: `docs/cursorLog/pages-management-plan.md`  
> Обзор: `pages-management-plan-00-overview.md`  
> Предыдущая: `pages-management-plan-06-admin-page.md`  
> Следующая: `pages-management-plan-08-sitemap-links.md`

---

## Задача

1. Создание новой страницы (slug, title) — файл + запись в манифест.
2. Переименование slug — переименовать файл, обновить манифест, автообновить ссылки в MDX.

---

## Создание страницы

Шаблон файла:

```yaml
---
slug: {slug}
title: {title}
pubdate: {YYYY-MM-DD}
---

# {title}

Здесь будет контент...
```

- Создать `content/articles/{slug}.mdx`.
- Добавить в манифест: `status: "draft"`, `publishedAt: ""` (или текущая дата по желанию).

---

## Переименование (смена slug)

1. Переименовать `content/articles/{oldSlug}.mdx` → `content/articles/{newSlug}.mdx`.
2. Обновить манифест: удалить старый ключ, добавить новый с обновлённым slug.
3. Автообновление ссылок: обойти все `content/articles/*.mdx`, заменить:
   - `/articles/{oldSlug}` → `/articles/{newSlug}`;
   - варианты: `href="/articles/old"`, `href={'/articles/old'}`, LINKS-ссылки (если остались).

---

## API

Расширить `/api/pages-manifest` или добавить отдельные endpoints:

- `POST /api/pages-manifest/create` — body: `{ slug, title }`;
- `PATCH /api/pages-manifest/rename` — body: `{ oldSlug, newSlug }`.

Либо всё через один PATCH с разными action.
