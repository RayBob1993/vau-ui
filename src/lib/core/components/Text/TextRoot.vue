<script setup lang="ts">
  import type { TextProps } from './types';
  import { useTextRoot } from './composables';
  import { Primitive } from '../Primitive';
  import { useConfigProviderRootContext } from '../ConfigProvider';

  const props = withDefaults(defineProps<TextProps>(), {
    as: 'div'
  });

  const configProviderRootContext = useConfigProviderRootContext();

  const { fontFamily } = useTextRoot({
    configProviderRootContext,
    props: () => props
  });
</script>

<template>
  <Primitive.Root
    :as="as"
    :as-child="asChild"
    class="text"
    :class="{
      'text--uppercase': uppercase,
      'text--underline': underline,
      [`text--size-${size}`]: size,
      [`text--size-xs-${sizeXs}`]: sizeXs,
      [`text--size-sm-${sizeSm}`]: sizeSm,
      [`text--size-md-${sizeMd}`]: sizeMd,
      [`text--size-lg-${sizeLg}`]: sizeLg,
      [`text--size-xl-${sizeXl}`]: sizeXl,
      [`text--size-xxl-${sizeXxl}`]: sizeXxl,
      [`text--theme-${theme}`]: theme,
      [`text--weight-${weight}`]: weight,
      [`text--font-family-${fontFamily}`]: fontFamily
    }"
  >
    <slot/>
  </Primitive.Root>
</template>
