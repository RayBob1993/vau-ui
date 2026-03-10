/**
 * CLI для создания базового шаблона компонента в packages/core.
 *
 * Использование: pnpm create-component <ComponentName>
 * Пример:       pnpm create-component MyPanel
 *
 * Создаёт структуру:
 * packages/core/src/components/<ComponentName>/
 * ├── context/
 * │   ├── key.ts
 * │   ├── useComponentRootContext.ts
 * │   └── index.ts
 * ├── composables/
 * │   ├── useComponentRoot.ts
 * │   └── index.ts
 * ├── ComponentRoot.vue
 * ├── index.ts
 * └── types.ts
 *
 * Папка templates/ повторяет структуру будущего компонента.
 * В именах файлов с динамической частью используется плейсхолдер "Component".
 */

import ejs from 'ejs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const CORE_COMPONENTS = path.join(ROOT, 'packages/core/src/components');
const TEMPLATES_DIR = path.join(__dirname, 'templates');

/**
 * @param {string} str
 * @returns {string}
 */
function toKebab (str) {
  return str
    .replace(/([A-Z])/g, (_, c) => '-' + c.toLowerCase())
    .replace(/^-/, '');
}

/**
 * @param {string} name PascalCase
 * @returns {boolean}
 */
function isPascalCase (name) {
  return /^[A-Z][a-zA-Z0-9]*$/.test(name);
}

/**
 * @param {string} dir
 */
function mkdirRecursive (dir) {
  if (fs.existsSync(dir)) {
    return;
  }
  mkdirRecursive(path.dirname(dir));
  fs.mkdirSync(dir);
}

/**
 * Рекурсивно собирает все .ejs файлы в директории.
 * @param {string} dir
 * @param {string} base
 * @returns {Array<{ templatePath: string; relativePath: string }>}
 */
function collectTemplates (dir, base = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const result = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(base, fullPath);

    if (entry.isDirectory()) {
      result.push(...collectTemplates(fullPath, base));
    } else if (entry.name.endsWith('.ejs')) {
      result.push({ templatePath: fullPath, relativePath });
    }
  }

  return result;
}

function main () {
  const componentName = process.argv[2];

  if (!componentName) {
    console.error('Использование: pnpm core:create-component <ComponentName>');
    console.error('Пример: pnpm core:create-component MyPanel');
    process.exit(1);
  }

  if (!isPascalCase(componentName)) {
    console.error(`Ошибка: имя компонента должно быть в PascalCase (например MyPanel), получено: "${componentName}"`);
    process.exit(1);
  }

  const componentDir = path.join(CORE_COMPONENTS, componentName);

  if (fs.existsSync(componentDir)) {
    console.error(`Ошибка: директория уже существует: ${componentDir}`);
    process.exit(1);
  }

  const rootContextKey = componentName + 'RootContextKey';
  const kebab = toKebab(componentName);
  const data = { componentName, kebab, rootContextKey };

  const templates = collectTemplates(TEMPLATES_DIR);

  for (const { templatePath, relativePath } of templates) {
    const template = fs.readFileSync(templatePath, 'utf8');
    const content = ejs.render(template, data);
    const outputPath = relativePath
      .replace(/Component/g, componentName)
      .replace(/\.ejs$/, '');
    const fullPath = path.join(componentDir, outputPath);

    mkdirRecursive(path.dirname(fullPath));
    fs.writeFileSync(fullPath, content, 'utf8');
  }

  console.log(`Создан компонент: ${componentDir}`);
  console.log('Добавьте экспорт в packages/core/src/components/index.ts:');
  console.log(`  export * from './${componentName}';`);
}

main();
