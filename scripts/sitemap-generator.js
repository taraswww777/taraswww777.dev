const sitemap = require('nextjs-sitemap-generator');
const path = require('path');

sitemap({
  baseUrl: "https://taraswww777.dev/",
  pagesDirectory: path.resolve(__dirname, '../out/'),
  targetDirectory: path.resolve(__dirname, '../out/'),
  ignoredExtensions: ["js", "map", "json", "xml", "png", "jpg", "jpeg", "svg"],
  ignoredPaths: ["[fallback]"],
  allowFileExtensions: true
});
