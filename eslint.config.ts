import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import unusedImports from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfigWithVueTs([
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommendedTypeChecked,
  importPlugin.flatConfigs.typescript,
  {
    files: ['**/*.{ts,tsx,js}'],
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/indent': ['error', 2],
    }
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/define-emits-declaration': ['error', 'type-based'],
      'vue/require-prop-types': ['error'],
      'vue/multi-word-component-names': 'off',
      'vue/v-on-event-hyphenation': [
        'error',
        'always',
        {
          autofix: true,
        },
      ],
      'vue/multiline-html-element-content-newline': [
        'error',
        {
          ignoreWhenEmpty: true,
          ignores: ['pre', 'textarea'],
          allowEmptyLines: false,
        },
      ],
      'vue/define-macros-order': ['error', {
        'order': [
          'defineProps',
          'defineEmits',
          'defineSlots',
          'defineModel'
        ]
      }],
      'vue/next-tick-style': ['error', 'promise'],
      'vue/component-definition-name-casing': [
        'error',
        'PascalCase',
      ],
      'vue/component-name-in-template-casing': [
        'error',
        'kebab-case',
        {
          registeredComponentsOnly: true,
        },
      ],
      'vue/html-closing-bracket-spacing': [
        'error',
        {
          selfClosingTag: 'never',
        },
      ],
      'vue/comma-dangle': ['error', 'never'],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'never',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'vue/html-indent': [
        'error',
        2,
        {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
          ignores: [],
        },
      ],
      'vue/html-quotes': [
        'error',
        'double',
        {
          avoidEscape: false,
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 1,
          },
          multiline: {
            max: 1,
          },
        },
      ],
      'vue/first-attribute-linebreak': [
        'error',
        {
          singleline: 'beside',
          multiline: 'below',
        },
      ],
      'vue/mustache-interpolation-spacing': ['error', 'always'],
      'vue/no-multi-spaces': [
        'error',
        {
          ignoreProperties: false,
        },
      ],
      'vue/padding-line-between-blocks': ['error', 'always'],
      'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/require-default-prop': ['error'],
      'vue/singleline-html-element-content-newline': [
        'error',
        {
          ignoreWhenNoAttributes: true,
          ignoreWhenEmpty: true,
          ignores: ['pre', 'textarea'],
        },
      ],
      'vue/require-macro-variable-name': [
        'error',
        {
          defineProps: 'props',
          defineEmits: 'emit',
          defineSlots: 'slots',
          useSlots: 'slots',
          useAttrs: 'attrs',
        },
      ],
      'vue/prefer-define-options': ['error'],
      'vue/require-typed-ref': ['error'],
      'vue/padding-line-between-tags': [
        'error',
        [
          {
            blankLine: 'always',
            prev: '*',
            next: '*'
          }
        ],
      ],
      'vue/html-button-has-type': [
        'error',
        {
          button: true,
          submit: true,
          reset: true,
        },
      ],
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts',
          },
        },
      ],
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/define-props-declaration': ['error', 'type-based'],
      'vue/script-indent': [
        'error',
        2,
        {
          baseIndent: 1,
          switchCase: 1,
          ignores: [],
        },
      ],
      'vue/attributes-order': ['error'],
      'vue/html-closing-bracket-newline': [
        'error',
        {
          singleline: 'never',
          multiline: 'always',
        },
      ],
      'vue/block-order': ['error', {
        order: [
          'script',
          'template',
          'style'
        ]
      }],
    }
  },
  {
    files: ['**/*.{ts,tsx,js,vue}'],
    plugins: {
      '@stylistic': stylistic,
      'unused-imports': unusedImports,
    },
    rules: {
      '@typescript-eslint/array-type': ['error', {
        'default': 'generic'
      }],
      '@stylistic/linebreak-style': ['error', 'unix'],
      'no-unused-vars': 'off',
      'guard-for-in': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          'vars': 'all',
          'varsIgnorePattern': '^_',
          'args': 'after-used',
          'argsIgnorePattern': '^_',
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'type',
            'index',
            'sibling',
            'parent',
            'internal',
            'external',
            'builtin',
            'object'
          ]
        }
      ],
      'import/newline-after-import': ['error', {
        count: 1,
        exactCount: true,
        considerComments: true
      }],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/semi': 'error',
      'no-duplicate-imports': ['error', {
        includeExports: true
      }],
      'no-restricted-imports': 'off',
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['**/*.ts', '**/*.tsx'],
            }
          ]
        }
      ],
      'object-curly-spacing': ['error', 'always'],
      'space-before-function-paren': ['error', 'always'],
      'arrow-parens': ['error', 'as-needed'],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],
    },
  },
  {
    ignores: [
      '**/dist/*',
      '**/node_modules/*',
      'vite.config.ts',
    ],
  },
]);
