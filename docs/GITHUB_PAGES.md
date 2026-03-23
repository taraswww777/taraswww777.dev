# Деплой на GitHub Pages

## Настройка

1. **Settings → Pages → Build and deployment**
   - **Source:** GitHub Actions

2. При пуше в ветку `master` запускается workflow `Deploy to GitHub Pages`.

## Варианты

### Project page (по умолчанию)

Сайт: `https://<username>.github.io/<repo-name>/`

Для репозитория `my-site-taraswww777` это будет:
`https://taraswww777.github.io/my-site-taraswww777/`

### User/org page

Сайт: `https://<username>.github.io/`

1. Создайте репозиторий с именем `<username>.github.io`
2. Скопируйте workflow и в шаге Build уберите вызов `apply-basepath.js`
3. Установите `SITEMAP_BASE_URL: https://<username>.github.io`
