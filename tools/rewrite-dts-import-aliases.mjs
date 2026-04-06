/**
 * Переписывает алиасы @vau/core и @vau/ui в относительные пути в сгенерированных .d.ts,
 * т.к. tsc-alias по умолчанию не обрабатывает имена вида *.vue.d.ts.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distRoot = path.resolve(__dirname, '../dist');

const aliasTargets = {
  '@vau/core': 'core/index.js',
  '@vau/ui': 'ui/index.js',
};

/**
 * @param {string} dir
 * @param {(filePath: string) => void} callback
 */
function walkDts(dir, callback) {
  if (!fs.existsSync(dir)) {
    return;
  }
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walkDts(full, callback);
    } else if (ent.name.endsWith('.d.ts')) {
      callback(full);
    }
  }
}

/**
 * @param {string} fromFile
 * @param {string} targetRelativeFromDist
 */
function relativeImport(fromFile, targetRelativeFromDist) {
  const targetAbs = path.join(distRoot, targetRelativeFromDist);
  let rel = path.relative(path.dirname(fromFile), targetAbs);
  rel = rel.split(path.sep).join('/');
  if (!rel.startsWith('.')) {
    return `./${rel}`;
  }
  return rel;
}

let changedFiles = 0;

walkDts(distRoot, (filePath) => {
  let text = fs.readFileSync(filePath, 'utf8');
  const original = text;

  for (const [alias, target] of Object.entries(aliasTargets)) {
    const rel = relativeImport(filePath, target);
    const escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    text = text.replaceAll(
      new RegExp(`from ['"]${escaped}['"]`, 'g'),
      `from '${rel}'`,
    );
    text = text.replaceAll(
      new RegExp(`import\\(['"]${escaped}['"]\\)`, 'g'),
      `import('${rel}')`,
    );
  }

  if (text !== original) {
    fs.writeFileSync(filePath, text, 'utf8');
    changedFiles += 1;
  }
});

console.log(`rewrite-dts-import-aliases: обновлено файлов: ${changedFiles}`);
