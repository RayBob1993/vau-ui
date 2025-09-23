<script setup lang="ts">
  import type { IVOptionInstance, IVOptionProps, IVOptionSlots, IVOptionValue } from './types';
  import { useSelectContext } from './context';
  import { computed, onUnmounted, reactive, useId } from 'vue';

  const props = defineProps<IVOptionProps>();

  defineSlots<IVOptionSlots>();

  const Select = useSelectContext();
  const id = useId();

  const optionInstance = reactive<IVOptionInstance>({
    id,
    props
  });

  const isActive = computed<boolean>(() => {
    if (Select?.props.multiple && Array.isArray(Select?.modelValue.value)) {
      return Select.modelValue.value.includes(props.value);
    }

    return Select?.modelValue.value === props.value;
  });

  const isDisabled = computed<boolean>(() => Select?.isDisabled.value || props.disabled);

  function handleChange (value: IVOptionValue) {
    if (props.disabled) {
      return;
    }

    Select?.handleChange(value);
  }

  Select?.registerOption(optionInstance);

  onUnmounted(() => {
    Select?.unregisterOption(optionInstance);
  });
</script>

<template>
  <div
    class="v-option"
    :class="{
      'v-option--active': isActive,
      'v-option--disabled': isDisabled
    }"
    @click="handleChange(value)"
  >
    {{ label }}

    <slot
      :is-active="isActive"
      :is-disabled="isDisabled"
    />
  </div>
</template>
