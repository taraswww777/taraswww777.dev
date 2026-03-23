# pages-management-plan-05: API routes для манифеста

> Часть плана: `docs/cursorLog/pages-management-plan.md`  
> Обзор: `pages-management-plan-00-overview.md`  
> Предыдущая: `pages-management-plan-04-articles-index.md`  
> Следующая: `pages-management-plan-06-admin-page.md`

---

## Задача

Создать API routes для чтения и обновления манифеста. Используются только в dev (при static export API не экспортируются).

---

## Эндпоинты

### GET /api/pages-manifest

Возвращает текущий `content/pages-manifest.json`.

### PATCH /api/pages-manifest

Тело: `{ slug: string, updates: Partial<ArticleManifestEntry> }` или `{ updates: PagesManifest }` (полная замена articles).

Действия:
1. Прочитать манифест.
2. Применить изменения.
3. Записать в `content/pages-manifest.json`.

---

## Действия

1. Создать `src/pages/api/pages-manifest/index.ts` (или App Router: `src/app/api/pages-manifest/route.ts`).
2. GET: читать JSON из `content/pages-manifest.json`, вернуть как JSON.
3. PATCH: принимать JSON, мержить или заменять, писать обратно в файл.
4. Проверить, что в Next.js Pages Router путь — `src/pages/api/...`, в App Router — `src/app/api/.../route.ts`. Проект использует Pages Router (`src/pages/`).
