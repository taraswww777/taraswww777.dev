#!/usr/bin/env node
/**
 * Добавляет basePath к ссылкам в статическом экспорте Next.js.
 * Используется для GitHub Pages project site (username.github.io/repo-name),
 * т.к. basePath в next.config вызывает ошибку сборки в Next.js 14.
 */
const fs = require('fs');
const path = require('path');

// argv[2] для обхода Git Bash на Windows (BASE_PATH=/x превращается в путь)
let basePath = process.argv[2] || process.env.BASE_PATH || '';
if (!basePath || basePath === '/') {
  console.log('BASE_PATH не задан, пропуск.');
  process.exit(0);
}

// Git Bash на Windows превращает /foo в C:/Program Files/Git/foo — извлекаем /foo
if (basePath.includes('Git') && path.sep === '\\') {
  basePath = '/' + path.basename(basePath);
}

const basePathNorm = basePath.replace(/\/$/, ''); // убираем trailing slash
const outDir = path.resolve(__dirname, '../out');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // href="/... и src="/... — добавляем basePath (избегаем // и уже обработанных)
  const prefix = basePathNorm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const patterns = [
    [new RegExp(`(\\bhref=")(?!${prefix})(\\/)(?!\\/)`, 'g'), `$1${basePathNorm}$2`],
    [new RegExp(`(\\bsrc=")(?!${prefix})(\\/)(?!\\/)`, 'g'), `$1${basePathNorm}$2`],
    [new RegExp(`(\\bcontent=")(?!${prefix})(\\/)(?!\\/)`, 'g'), `$1${basePathNorm}$2`],
  ];

  for (const [regex, replacement] of patterns) {
    const newContent = content.replace(regex, replacement);
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
  }
}

function walkDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.name.endsWith('.html') || entry.name.endsWith('.xml')) {
      processFile(fullPath);
    } else if (entry.name.endsWith('.js')) {
      // _next/static содержит ссылки на ассеты
      processFile(fullPath);
    }
  }
}

if (!fs.existsSync(outDir)) {
  console.error('Папка out не найдена. Сначала выполните npm run build');
  process.exit(1);
}

walkDir(outDir);
console.log(`✅ basePath ${basePathNorm} применён к ссылкам`);
process.exit(0);
