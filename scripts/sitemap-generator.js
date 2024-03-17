const sitemap = require('nextjs-sitemap-generator');
const path = require('path');

sitemap({
  baseUrl: "https://taraswww777.dev",
  pagesDirectory: path.resolve(__dirname, '../out/'),
  targetDirectory: path.resolve(__dirname, '../out/'),
  ignoredExtensions: [
    "js", "map", "json", "xml",
    "png", "jpg", "jpeg", "svg", 'ico', 'ico',
    'eot', 'ttf', 'woff', 'woff2',
  ],
  ignoredPaths: [
    // "/fonts",
    // "/index.html"
  ],
  allowFileExtensions: true
}).then(() => {
  console.log(`✅ sitemap.xml generated!`);
});
