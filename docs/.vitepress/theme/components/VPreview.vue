<script setup lang="ts">
  import { computed, defineAsyncComponent, shallowRef, watch } from 'vue';
  import type { Component } from 'vue';
  import type { BundledTheme } from 'shiki';
  import { getSingletonHighlighter } from 'shiki';
  import { useData } from 'vitepress';

  const props = defineProps<{
    /** Путь от корня `docs/`, например `examples/core/button/ButtonBase.vue`. */
    path: string;
  }>();

  const { isDark, theme } = useData();

  /**
   * Подстановка `{path}` в строку из локали.
   */
  function formatDocPreviewMessage(template: string, pathValue: string): string {
    return template.replaceAll('{path}', pathValue);
  }

  /** Темы Shiki, согласованные со светлой/тёмной схемой VitePress (как у блоков ``` в markdown). */
  const THEME_LIGHT: BundledTheme = 'github-light';
  const THEME_DARK: BundledTheme = 'github-dark';

  const modules = import.meta.glob('../../../examples/**/*.vue');
  const rawModules = import.meta.glob<string>('../../../examples/**/*.vue', {
    import: 'default',
    query: '?raw',
  });

  /**
   * Преобразует ключ Vite `import.meta.glob` в путь вида `examples/.../File.vue`.
   */
  function toExamplesPath(globKey: string): string {
    const normalized = globKey.replace(/\\/g, '/');
    const match = normalized.match(/(examples\/.+\.vue)$/u);
    if (match) {
      return match[1];
    }
    const idx = normalized.indexOf('examples/');
    if (idx >= 0) {
      return normalized.slice(idx);
    }
    return normalized;
  }

  /**
   * Нормализует значение prop `path` к ключу lookup.
   */
  function normalizeUserPath(input: string): string {
    let result = input.trim().replace(/\\/g, '/');
    if (result.startsWith('docs/')) {
      result = result.slice(5);
    }
    return result.replace(/^\/+/u, '');
  }

  type LoadComponent = () => Promise<{ default: Component }>;
  type LoadRaw = () => Promise<string>;

  function buildMaps(): {
    componentByPath: Map<string, LoadComponent>;
    rawByPath: Map<string, LoadRaw>;
  } {
    const componentByPath = new Map<string, LoadComponent>();
    const rawByPath = new Map<string, LoadRaw>();

    for (const key of Object.keys(modules)) {
      const examplesPath = toExamplesPath(key);
      const loadComponent = modules[key] as LoadComponent;
      const loadRaw = rawModules[key] as LoadRaw | undefined;
      if (!loadRaw) {
        continue;
      }
      componentByPath.set(examplesPath, loadComponent);
      rawByPath.set(examplesPath, loadRaw);
    }

    return { componentByPath, rawByPath };
  }

  const { componentByPath, rawByPath } = buildMaps();

  const normalizedPath = computed(() => normalizeUserPath(props.path));

  const demoComponent = shallowRef<Component | null>(null);
  const sourceCode = shallowRef<string>('');
  const highlightedHtml = shallowRef<string>('');
  const loadError = shallowRef<string | null>(null);

  /**
   * Номера строк для «желобка» слева (по исходному тексту, как в типичном редакторе).
   */
  const lineNumbers = computed(() => {
    const text = sourceCode.value;
    if (text === '') {
      return [];
    }
    const count = text.split('\n').length;
    return Array.from({ length: count }, (_, index) => index + 1);
  });

  const copyButtonLabel = computed(() => theme.value.docPreview?.copy ?? 'Copy');

  const docPreviewStrings = computed(() => ({
    exampleNotFound:
      theme.value.docPreview?.exampleNotFound ?? 'Example not found: {path}',
    loadSourceFailed:
      theme.value.docPreview?.loadSourceFailed ?? 'Could not load source: {path}',
  }));

  /**
   * Подсветка исходника через Shiki (тот же движок, что и у VitePress для fenced blocks).
   */
  async function applySyntaxHighlight(): Promise<void> {
    if (!sourceCode.value) {
      highlightedHtml.value = '';
      return;
    }

    try {
      const highlighter = await getSingletonHighlighter({
        langs: ['vue'],
        themes: [THEME_LIGHT, THEME_DARK],
      });

      const theme = isDark.value ? THEME_DARK : THEME_LIGHT;

      highlightedHtml.value = highlighter.codeToHtml(sourceCode.value, {
        lang: 'vue',
        theme,
      });
    } catch {
      highlightedHtml.value = '';
    }
  }

  watch(
    normalizedPath,
    (pathValue) => {
      loadError.value = null;
      sourceCode.value = '';
      highlightedHtml.value = '';
      demoComponent.value = null;

      const loadComp = componentByPath.get(pathValue);
      const loadRaw = rawByPath.get(pathValue);

      if (!loadComp || !loadRaw) {
        loadError.value = formatDocPreviewMessage(
          docPreviewStrings.value.exampleNotFound,
          pathValue,
        );
        return;
      }

      void (async function loadPreview(): Promise<void> {
        try {
          const raw = await loadRaw();
          sourceCode.value = typeof raw === 'string' ? raw : String(raw);
        } catch {
          loadError.value = formatDocPreviewMessage(
            docPreviewStrings.value.loadSourceFailed,
            pathValue,
          );
          return;
        }

        demoComponent.value = defineAsyncComponent({
          loader: loadComp,
        });

        await applySyntaxHighlight();
      })();
    },
    { immediate: true },
  );

  watch(
    () => isDark.value,
    () => {
      void applySyntaxHighlight();
    },
  );

  /**
   * Копирует исходник примера в буфер обмена (только в браузере).
   */
  async function handleCopyClick(): Promise<void> {
    if (!sourceCode.value) {
      return;
    }
    if (typeof navigator === 'undefined' || !navigator.clipboard?.writeText) {
      return;
    }
    try {
      await navigator.clipboard.writeText(sourceCode.value);
    } catch {
      // Игнорируем отказ доступа к буферу обмена.
    }
  }
</script>

<template>
  <div class="doc-preview">
    <p
      v-if="loadError"
      class="doc-preview__error"
      role="alert"
    >
      {{ loadError }}
    </p>
    <template v-else>
      <div class="doc-preview__canvas">
        <component
          :is="demoComponent"
          v-if="demoComponent"
        />
      </div>
      <div class="doc-preview__toolbar">
        <button
          type="button"
          class="doc-preview__copy"
          :aria-label="copyButtonLabel"
          @click="handleCopyClick"
        >
          {{ copyButtonLabel }}
        </button>
      </div>
      <div
        v-if="highlightedHtml || sourceCode"
        class="doc-preview__code-shell"
      >
        <div
          class="doc-preview__gutter"
          aria-hidden="true"
        >
          <span
            v-for="num in lineNumbers"
            :key="num"
            class="doc-preview__gutter-line"
          >
            {{ num }}
          </span>
        </div>
        <div
          v-if="highlightedHtml"
          class="doc-preview__highlight"
          v-html="highlightedHtml"
        />
        <pre
          v-else-if="sourceCode"
          class="doc-preview__pre doc-preview__pre--plain"
        ><code>{{ sourceCode }}</code></pre>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.doc-preview {
  margin: 1rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);

  &__canvas {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 1.25rem;
    min-height: 350px;
    border-bottom: 1px solid var(--vp-c-divider);

    /* Тетрадная клетка + красное поле (как у школьной тетради в клетку). */
    --doc-preview-cell: 14px;
    --doc-preview-line: color-mix(in srgb, var(--vp-c-text-2) 7%, transparent);
    --doc-preview-margin: color-mix(in srgb, #e57373 28%, transparent);

    background-color: var(--vp-c-bg);
    background-image:
      linear-gradient(
        90deg,
        transparent 27px,
        var(--doc-preview-margin) 27px,
        var(--doc-preview-margin) 28px,
        transparent 28px
      ),
      linear-gradient(var(--doc-preview-line) 1px, transparent 1px),
      linear-gradient(90deg, var(--doc-preview-line) 1px, transparent 1px);
    background-size:
      100% 100%,
      var(--doc-preview-cell) var(--doc-preview-cell),
      var(--doc-preview-cell) var(--doc-preview-cell);
    background-position:
      0 0,
      -1px -1px,
      -1px -1px;
  }

  &__toolbar {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem 0.75rem;
    background: var(--vp-c-bg-soft);
    border-bottom: 1px solid var(--vp-c-divider);
  }

  &__copy {
    padding: 0.25rem 0.6rem;
    font-size: 0.85rem;
    line-height: 1.4;
    color: var(--vp-c-brand-1);
    cursor: pointer;
    background: transparent;
    border: 1px solid var(--vp-c-divider);
    border-radius: 4px;

    &:hover {
      border-color: var(--vp-c-brand-1);
    }
  }

  /** Общая прокрутка для кода и колонки номеров строк. */
  &__code-shell {
    display: flex;
    align-items: stretch;
    max-height: 28rem;
    overflow: auto;
    font-size: 0.85rem;
    line-height: 1.5;
    background: var(--vp-code-block-bg);
  }

  &__gutter {
    flex-shrink: 0;
    padding: 1rem 0.65rem 1rem 0.85rem;
    border-right: 1px solid var(--vp-c-divider);
    font-family: var(--vp-font-family-mono);
    color: color-mix(in srgb, var(--vp-c-text-3) 75%, transparent);
    text-align: right;
    user-select: none;
    background: color-mix(in srgb, var(--vp-c-bg-soft) 40%, transparent);
  }

  &__gutter-line {
    display: block;
    white-space: pre;
  }

  &__pre {
    margin: 0;
    padding: 1rem 1.1rem;
    font-family: var(--vp-font-family-mono);
    font-size: 0.85rem;
    line-height: 1.5;
    background: transparent;
  }

  &__code-shell &__pre {
    flex: 1;
    min-width: 0;
    margin: 0;
    max-height: none;
    overflow: visible;
  }

  &__highlight {
    flex: 1;
    min-width: 0;
    margin: 0;
    overflow: visible;
    font-size: 0.85rem;
    line-height: 1.5;
    background: transparent;

    &:deep(pre) {
      margin: 0;
      padding: 1rem 1.1rem;
      font-family: var(--vp-font-family-mono);
      line-height: 1.5;
    }

    &:deep(code) {
      font-family: var(--vp-font-family-mono);
      line-height: 1.5;
    }
  }

  &__error {
    margin: 0;
    padding: 1rem;
    color: var(--vp-c-danger-1);
  }
}
</style>
