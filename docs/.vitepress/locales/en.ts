import type { DefaultTheme } from 'vitepress';
import type { DocLocaleConfig } from './types';

/**
 * English locale: content under `docs/en/`, URL prefix `/en` (no trailing slash in paths).
 */
const enThemeConfig: DefaultTheme.Config = {
  nav: [
    {
      text: 'Getting started',
      link: '/en/getting-started',
      activeMatch: '^/en/getting-started'
    },
    { text: 'Core', link: '/en/core', activeMatch: '^/en/core' },
    { text: 'UI', link: '/en/ui', activeMatch: '^/en/ui' }
  ],
  sidebar: {
    '/en/getting-started': [
      {
        text: 'Introduction',
        items: [{ text: 'Getting started', link: '/en/getting-started' }]
      }
    ],
    '/en/core': [
      {
        text: 'Core',
        items: [
          { text: 'Overview', link: '/en/core' },
          {
            text: 'Components',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/en/core/components' },
              { text: 'Button', link: '/en/core/components/button' }
            ]
          },
          {
            text: 'Composables',
            collapsed: true,
            items: [{ text: 'Overview', link: '/en/core/composables' }]
          },
          {
            text: 'Utils',
            collapsed: true,
            items: [{ text: 'Overview', link: '/en/core/utils' }]
          },
          {
            text: 'Directives',
            collapsed: true,
            items: [{ text: 'Overview', link: '/en/core/directives' }]
          },
          {
            text: 'Constants',
            collapsed: true,
            items: [{ text: 'Overview', link: '/en/core/constants' }]
          },
          {
            text: 'Types',
            collapsed: true,
            items: [{ text: 'Overview', link: '/en/core/types' }]
          }
        ]
      }
    ],
    '/en/ui': [
      {
        text: 'UI',
        items: [{ text: 'Overview', link: '/en/ui' }]
      }
    ]
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/RayBob1993/vau' }
  ],
  footer: {
    message: 'Released under the MIT License'
  },
  outline: {
    label: 'On this page'
  },
  docPreview: {
    copy: 'Copy',
    exampleNotFound: 'Example not found: {path}',
    loadSourceFailed: 'Could not load source: {path}'
  },
  docFooter: {
    prev: 'Previous page',
    next: 'Next page'
  },
  lastUpdated: {
    text: 'Last updated'
  },
  editLink: {
    pattern: 'https://github.com/RayBob1993/vau-ui/edit/main/docs/:path',
    text: 'Edit this page on GitHub'
  },
  search: {
    provider: 'local',
    options: {
      locales: {
        en: {
          translations: {
            button: {
              buttonText: 'Search',
              buttonAriaLabel: 'Search documentation'
            },
            modal: {
              displayDetails: 'Show detailed list',
              resetButtonTitle: 'Clear search',
              backButtonTitle: 'Close search',
              noResultsText: 'No results found',
              footer: {
                selectText: 'Select',
                selectKeyAriaLabel: 'enter',
                navigateText: 'Navigate',
                navigateUpKeyAriaLabel: 'up arrow',
                navigateDownKeyAriaLabel: 'down arrow',
                closeText: 'Close',
                closeKeyAriaLabel: 'escape'
              }
            }
          }
        }
      }
    }
  }
};

/**
 * English locale settings.
 */
export const enLocale: DocLocaleConfig = {
  label: 'English',
  lang: 'en-US',
  link: '/en',
  title: 'Vau',
  description: 'Vue 3 component UI library',
  themeConfig: enThemeConfig
};
