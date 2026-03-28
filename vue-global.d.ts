/**
 * Карта глобальных компонентов для Volar / vue-tsc после регистрации через VauUI.
 *
 * Включает:
 * - плоские `V*` из UI;
 * - compound-компоненты Core с точкой в имени (`Button.Root`, `Menu.Item`, …).
 *
 * В приложении-потребителе добавьте в tsconfig / env.d.ts:
 * /// <reference types="vau-ui/vue-global" />
 * и расширьте `GlobalComponents` (см. README).
 *
 * Зависит от актуального `dist/index.d.ts` — перед публикацией выполните `pnpm build`.
 */
import type * as VauExports from './dist/index.js';

/**
 * Экспорты с префикса `V`, которые не являются корневыми SFC (плагины и т.п.).
 */
type VauGlobalNonComponents = 'VauUI' | 'VisiblePlugin';

/**
 * Разворачивает объект неймспейса Core в ключи вида `Prefix.SubName` для шаблонов Vue.
 */
type FlattenNamespace<
  NS extends Record<string, unknown>,
  Prefix extends string
> = {
  [K in keyof NS as `${Prefix}.${Extract<K, string>}`]: NS[K];
};

/**
 * Все компоненты `V*` из публичного API библиотеки (кроме исключений выше).
 */
type VauUIFlatComponents = {
  [K in Exclude<Extract<keyof typeof VauExports, `V${string}`>, VauGlobalNonComponents>]: (typeof VauExports)[K];
};

/**
 * Compound-компоненты Core (регистрация `app.component('Button.Root', Button.Root)` и т.д.).
 * Список неймспейсов синхронизирован с `src/lib/core/components/index.ts`.
 */
type VauCoreCompoundGlobalComponents = FlattenNamespace<typeof VauExports.Accordion, 'Accordion'> &
  FlattenNamespace<typeof VauExports.Button, 'Button'> &
  FlattenNamespace<typeof VauExports.Checkbox, 'Checkbox'> &
  FlattenNamespace<typeof VauExports.ConfigProvider, 'ConfigProvider'> &
  FlattenNamespace<typeof VauExports.Divider, 'Divider'> &
  FlattenNamespace<typeof VauExports.Flex, 'Flex'> &
  FlattenNamespace<typeof VauExports.Form, 'Form'> &
  FlattenNamespace<typeof VauExports.Grid, 'Grid'> &
  FlattenNamespace<typeof VauExports.Input, 'Input'> &
  FlattenNamespace<typeof VauExports.InputCode, 'InputCode'> &
  FlattenNamespace<typeof VauExports.InputNumber, 'InputNumber'> &
  FlattenNamespace<typeof VauExports.InputPassword, 'InputPassword'> &
  FlattenNamespace<typeof VauExports.InputRange, 'InputRange'> &
  FlattenNamespace<typeof VauExports.InputTags, 'InputTags'> &
  FlattenNamespace<typeof VauExports.Layout, 'Layout'> &
  FlattenNamespace<typeof VauExports.Menu, 'Menu'> &
  FlattenNamespace<typeof VauExports.Modal, 'Modal'> &
  FlattenNamespace<typeof VauExports.Primitive, 'Primitive'> &
  FlattenNamespace<typeof VauExports.Radio, 'Radio'> &
  FlattenNamespace<typeof VauExports.Scrollbar, 'Scrollbar'> &
  FlattenNamespace<typeof VauExports.Section, 'Section'> &
  FlattenNamespace<typeof VauExports.Select, 'Select'> &
  FlattenNamespace<typeof VauExports.Switch, 'Switch'> &
  FlattenNamespace<typeof VauExports.Tag, 'Tag'> &
  FlattenNamespace<typeof VauExports.Text, 'Text'>;

/**
 * Полная карта глобальных тегов: UI (`V*`) и Core (`Namespace.Part`).
 */
export type VauUIGlobalComponents = VauUIFlatComponents & VauCoreCompoundGlobalComponents;
