<script setup lang="ts">
  import type { ButtonProps } from './types';
  import { useButtonRoot } from './composables';
  import { useFormContext } from '../Form/context';
  import { Primitive } from '../Primitive';

  const props = withDefaults(defineProps<ButtonProps>(), {
    as: 'button',
    type: 'button',
  });

  const { formRootContext, formItemContext } = useFormContext();

  const { isDisabled } = useButtonRoot({
    formRootContext,
    formItemContext,
    props: () => props
  });
</script>

<template>
  <Primitive.Root
    :as="as"
    :as-child="asChild"
    class="button"
    :class="[
      {
        'button--disabled': isDisabled,
        'button--loading': loading,
        'button--plain': plain,
        'button--wide': wide,
        [`button--theme-${theme}`]: theme,
        [`button--size-${size}`]: size,
        [`button--size-xs-${sizeXs}`]: sizeXs,
        [`button--size-sm-${sizeSm}`]: sizeSm,
        [`button--size-md-${sizeMd}`]: sizeMd,
        [`button--size-lg-${sizeLg}`]: sizeLg,
        [`button--size-xl-${sizeXl}`]: sizeXl,
        [`button--size-xxl-${sizeXxl}`]: sizeXxl
      }
    ]"
    :disabled="isDisabled"
    :type="type"
  >
    <slot/>
  </Primitive.Root>
</template>
