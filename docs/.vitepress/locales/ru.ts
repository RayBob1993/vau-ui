import type { DefaultTheme } from 'vitepress';

import type { DocLocaleConfig } from './types';

/**
 * Русская документация: контент в `docs/ru/`, префикс URL `/ru`.
 */
const ruThemeConfig: DefaultTheme.Config = {
  nav: [
    {
      text: 'Начало работы',
      link: '/ru/getting-started',
      activeMatch: '^/ru/getting-started'
    },
    { text: 'Core', link: '/ru/core', activeMatch: '^/ru/core' },
    { text: 'UI', link: '/ru/ui', activeMatch: '^/ru/ui' }
  ],
  sidebar: {
    '/ru/getting-started': [
      {
        text: 'Введение',
        items: [{ text: 'Начало работы', link: '/ru/getting-started' }]
      }
    ],
    '/ru/core': [
      {
        text: 'Core',
        items: [
          { text: 'Обзор', link: '/ru/core' },
          { text: 'Компоненты', link: '/ru/core/components' },
          { text: 'Composables', link: '/ru/core/composables' },
          { text: 'Утилиты', link: '/ru/core/utils' },
          { text: 'Директивы', link: '/ru/core/directives' },
          { text: 'Константы', link: '/ru/core/constants' },
          { text: 'Типы', link: '/ru/core/types' }
        ]
      }
    ],
    '/ru/ui': [
      {
        text: 'UI',
        items: [{ text: 'Обзор', link: '/ru/ui' }]
      }
    ]
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/RayBob1993/vau-ui' }
  ],
  footer: {
    message: 'Выпущено под лицензией MIT'
  },
  outline: {
    label: 'На этой странице'
  },
  docFooter: {
    prev: 'Предыдущая страница',
    next: 'Следующая страница'
  },
  search: {
    provider: 'local',
    options: {
      locales: {
        ru: {
          translations: {
            button: {
              buttonText: 'Поиск',
              buttonAriaLabel: 'Поиск по документации'
            },
            modal: {
              displayDetails: 'Показать подробный список',
              resetButtonTitle: 'Сбросить поиск',
              backButtonTitle: 'Закрыть поиск',
              noResultsText: 'Ничего не найдено',
              footer: {
                selectText: 'Выбрать',
                selectKeyAriaLabel: 'ввод',
                navigateText: 'Навигация',
                navigateUpKeyAriaLabel: 'стрелка вверх',
                navigateDownKeyAriaLabel: 'стрелка вниз',
                closeText: 'Закрыть',
                closeKeyAriaLabel: 'Escape'
              }
            }
          }
        }
      }
    }
  }
};

/**
 * Локаль русской документации (`docs/ru/`).
 */
export const ruLocale: DocLocaleConfig = {
  label: 'Русский',
  lang: 'ru-RU',
  link: '/ru',
  title: 'VauUI',
  description: 'Компонентная UI-библиотека для Vue 3',
  themeConfig: ruThemeConfig
};
