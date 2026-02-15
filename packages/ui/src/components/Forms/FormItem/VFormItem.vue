<script lang="ts" setup>
  import type {
    IVFormItemExpose,
    IVFormItemInstance,
    IVFormItemProps,
    IVFormItemSlots
  } from './types';
  import { useFormItem } from './composables';
  import { VFormItemContextKey } from './context';
  import { useFormContext } from '../Form';
  import { useTemplateRef, defineAsyncComponent, onUnmounted, provide, computed } from 'vue';

  const props = defineProps<IVFormItemProps>();
  const slots = defineSlots<IVFormItemSlots>();

  const VFormItemErrors = defineAsyncComponent(() => import('./VFormItemErrors.vue'));

  const Form = useFormContext();
  const {
    id,
    validationErrors,
    validationStatus,
    isDisabled,
    isRequired,
    validate,
    clearValidate,
    isValidatable,
    reset,
    registerField,
    unregisterField
  } = useFormItem({
    context: Form,
    props
  });

  const root = useTemplateRef<HTMLDivElement>('root');

  const formItemInstance: IVFormItemInstance = {
    el: root.value,
    id,
    props,
    validationStatus: validationStatus.value,
    isRequired: isRequired.value,
    isValidatable: isValidatable.value,
    reset,
    validate,
    clearValidate
  };

  const isVisibleHeader = computed<boolean>(() => Boolean(slots?.label || props.title));

  Form?.registerFormItem(formItemInstance);

  onUnmounted(() => {
    Form?.unregisterFormItem(id);
  });

  provide(VFormItemContextKey, {
    props,
    validationStatus,
    isRequired,
    registerField,
    unregisterField,
    validate,
    clearValidate,
    reset
  });

  defineExpose<IVFormItemExpose>({
    reset,
    validate,
    clearValidate
  });
</script>

<template>
  <div
    ref="root"
    class="v-form-item"
    :class="[
      {
        'v-form-item--disabled': isDisabled,
        'v-form-item--required': isRequired,
        'v-form-item--invalid': validationStatus.isError,
        'v-form-item--validating': validationStatus.isValidating,
        'v-form-item--valid': validationStatus.isSuccess
      }
    ]"
  >
    <div
      v-if="isVisibleHeader"
      class="v-form-item__header"
    >
      <slot
        name="label"
        :validation-status="validationStatus"
        :isRequired="isRequired"
      >
        <label
          v-if="title"
          class="v-form-item__label"
        >
          {{ title }}

          <span
            v-if="isRequired"
            class="v-form-item__label-required"
          >
            *
          </span>
        </label>
      </slot>
    </div>

    <div class="v-form-item__body">
      <slot
        :validation-status="validationStatus"
        :is-required="isRequired"
      />
    </div>

    <div
      v-if="validationErrors.length"
      class="v-form-item__footer"
    >
      <v-form-item-errors :errors="validationErrors"/>
    </div>
  </div>
</template>
