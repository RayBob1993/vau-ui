/// <reference types="vitepress/client" />

declare module 'vitepress/types/default-theme.js' {
  namespace DefaultTheme {
    interface Config {
      /** Строки для компонента живого превью (`Preview.vue`). */
      docPreview?: {
        /** Подпись кнопки «Копировать» над блоком кода. */
        copy: string;
        /** Ошибка: пример не найден по `path`. Плейсхолдер `{path}`. */
        exampleNotFound: string;
        /** Ошибка загрузки сырого файла. Плейсхолдер `{path}`. */
        loadSourceFailed: string;
      };
    }
  }
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<object, object, unknown>;
  export default component;
}

declare module '*?raw' {
  const src: string;
  export default src;
}
