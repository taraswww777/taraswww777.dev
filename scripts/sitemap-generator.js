const sitemap = require('nextjs-sitemap-generator');
const path = require('path');

/**
 * @type {import('nextjs-sitemap-generator').Config.defaults}
 * @see https://github.com/IlusionDev/nextjs-sitemap-generator
 **/
const sitemapConfig = {
  /** Вы можете добавить альтернативные домены, соответствующие доступному языку. (OPTIONAL) */
  // alternateUrls?: object;
  /** URL-адрес, который будет использоваться в начале каждой страницы. */
  baseUrl: "https://taraswww777.dev",
  /** Файл или каталог, которые не следует сопоставлять (например, маршруты администратора). (OPTIONAL)*/
  // ignoredPaths?: Array<string | RegExp>;
  /** Массив дополнительных путей для включения в карту сайта (даже если они отсутствуют в PageDirectory). (OPTIONAL) */
  // extraPaths?: Array<string>;
  /** Должен ли индексный файл находиться в URL-адресе или просто в каталоге, заканчивающемся косой чертой (OPTIONAL) */
  ignoreIndexFiles: false,
  /** Игнорировать файлы по расширению. (OPTIONAL) */
  ignoredExtensions: [
    "js", "map", "json", "xml",
    "png", "jpg", "jpeg", "svg", 'ico', 'ico',
    'eot', 'ttf', 'woff', 'woff2',
  ],
  /** Каталог, в котором находятся страницы Nextjs. Вы можете использовать другой каталог, пока они являются страницами nextjs.
   * Это должен быть абсолютный путь. (OPTIONAL)
   * */
  pagesDirectory: path.resolve(__dirname, '../out/'),
  /** (Используется для динамических маршрутов): вызываетexportPathMap, если он экспортирован из js-файла nextConfigPath. (OPTIONAL)*/
  // nextConfigPath?: string;
  /** Каталог, в который будет записан файл sitemap.xml. */
  targetDirectory: path.resolve(__dirname, '../out/'),
  /** Имя файла карты сайта. По умолчанию используется sitemap.xml. */
  // sitemapFilename?: string;
  /**
   * Конфигурация объекта приоритета и частоты изменений для каждого маршрута.
   * Принимает шаблоны регулярных выражений (OPTIONAL).
   * Ключи пути должны быть в нижнем регистре.
   */
  // pagesConfig?: object;
  /** Массив объектов стиля, которые будут применены к карте сайта. (OPTIONAL) */
  // sitemapStylesheet?: Array<SitemapStyleFile>;
  /**
   * (Используется для статических приложений): обеспечивает отображение расширения файла вместе с путем в карте сайта.
   * Если вы используете nextConfigPath с экспортом TrailingSlash в следующей конфигурации,
   * то allowFileExtensions будет игнорироваться. (НЕОБЯЗАТЕЛЬНЫЙ)
   */
  allowFileExtensions: false
};

sitemap(sitemapConfig).then(() => {
  console.log(`✅ sitemap.xml generated!`);
});
