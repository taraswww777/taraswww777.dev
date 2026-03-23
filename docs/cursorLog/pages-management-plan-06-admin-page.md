# pages-management-plan-06: админ-страница + postbuild

> Часть плана: `docs/cursorLog/pages-management-plan.md`  
> Обзор: `pages-management-plan-00-overview.md`  
> Предыдущая: `pages-management-plan-05-api-routes.md`  
> Следующая: `pages-management-plan-07-create-rename.md`

---

## Задача

1. Создать админ-страницу `/admin` для управления манифестом.
2. Исключить её из production-сборки через postbuild.

---

## Админ-страница

- Таблица/список статей из манифеста.
- Возможность менять `status`, `title`, `publishedAt`.
- Вызов PATCH `/api/pages-manifest` при сохранении.
- (Опционально) проверка `window.location.hostname === 'localhost'` — если нет, показать "Доступ только с localhost".

---

## Postbuild

Next.js не исключает страницы из static export. Решение: удалить админку из `out/` после сборки.

1. Создать `scripts/postbuild-exclude-admin.js`:
   - Удалить `out/admin`, `out/admin.html` (в зависимости от структуры output).
2. Обновить `package.json`: `"build": "next build && node scripts/postbuild-exclude-admin.js"`.
3. Учесть, что sitemap может вызываться отдельно (`npm run sitemap`) — postbuild должен выполняться после `next build` и перед sitemap, если sitemap идёт в составе deploy.

---

## Действия

1. Создать `src/pages/admin/index.tsx` с UI управления манифестом.
2. Создать `scripts/postbuild-exclude-admin.js`.
3. Обновить скрипт build в `package.json`.
