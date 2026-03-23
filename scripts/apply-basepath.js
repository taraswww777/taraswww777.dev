#!/usr/bin/env node
/**
 * Добавляет basePath к ссылкам в статическом экспорте Next.js.
 * Работает ТОЛЬКО при сборке для GitHub Pages (username.github.io/repo-name).
 * Вызывать только из workflow deploy-github-pages — не для taraswww777.dev / localhost.
 */
const fs = require('fs');
const path = require('path');

// Патч только для GH Pages — проверка через env (задаётся в workflow)
if (process.env.DEPLOY_TARGET !== 'github-pages') {
  console.log('apply-basepath: пропуск (DEPLOY_TARGET !== github-pages)');
  process.exit(0);
}

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

function processFile(filePath, isJsFile = false) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Экранируем basePath для regex
  const prefix = basePathNorm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // href="/... src="/... content="/... — в HTML и JS
  const attrPatterns = [
    [new RegExp(`(\\bhref=")(?!${prefix})(\\/)(?!\\/)`, 'g'), `$1${basePathNorm}$2`],
    [new RegExp(`(\\bsrc=")(?!${prefix})(\\/)(?!\\/)`, 'g'), `$1${basePathNorm}$2`],
    [new RegExp(`(\\bcontent=")(?!${prefix})(\\/)(?!\\/)`, 'g'), `$1${basePathNorm}$2`],
  ];

  for (const [regex, replacement] of attrPatterns) {
    const newContent = content.replace(regex, replacement);
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
  }

  // JS: path-строки вида "/path" — для router, Link, prefetch (но не "https://")
  if (isJsFile) {
    const pathPattern = new RegExp(
      `"(?=\\/)(?!${prefix}\\/)(?!\\/\\/)`,
      'g'
    );
    const newContent = content.replace(pathPattern, () => `"${basePathNorm}`);
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
      processFile(fullPath, false);
    } else if (entry.name.endsWith('.js')) {
      processFile(fullPath, true); // JS: path-строки для router, Link
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
