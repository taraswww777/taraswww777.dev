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

---

## Выполнено

- Создан `src/pages/admin/index.tsx`: таблица статей, редактирование title/status/publishedAt, PATCH при сохранении.
- Проверка `hostname === 'localhost'` — при доступе не с localhost показывается «Доступ только с localhost».
- Создан `scripts/postbuild-exclude-admin.js`: удаляет `out/admin` и `out/admin.html`.
- `package.json` build: `next build && node scripts/postbuild-exclude-admin.js`.

### Уточнения (по результатам реализации)

- **React Hook Form** — форма на `useForm`, `react-hook-form@7.48.2` (совместимость с TS 4.7).
- **Кнопка сброса** — иконка `fa-rotate-left` рядом с каждым полем; сброс значения до defaultValue из манифеста.
- **publishedAt** — `type="date"` (datepicker), `[color-scheme:dark]` для темы.
- **Font Awesome** — страница в Pages Router не получает `app/layout.tsx`; в админке добавлен `Script` с Font Awesome kit.
- **Кнопка «Сохранить»** — закреплена внизу экрана: `fixed bottom-16`, выше футера, с `backdrop-blur-sm`.
