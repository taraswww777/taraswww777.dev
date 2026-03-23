#!/usr/bin/env node
/**
 * Удаляет админку из статического экспорта (out/).
 * Вызывается после next build, перед sitemap.
 */
const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');
const adminPaths = [
  path.join(outDir, 'admin'),
  path.join(outDir, 'admin.html'),
];

let removed = 0;
for (const p of adminPaths) {
  try {
    const stat = fs.statSync(p);
    if (stat.isDirectory()) {
      fs.rmSync(p, { recursive: true });
      console.log('Removed:', p);
      removed++;
    } else if (stat.isFile()) {
      fs.unlinkSync(p);
      console.log('Removed:', p);
      removed++;
    }
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error('postbuild-exclude-admin:', err.message);
      process.exit(1);
    }
  }
}

if (removed > 0) {
  console.log('postbuild-exclude-admin: админка удалена из out/');
}
