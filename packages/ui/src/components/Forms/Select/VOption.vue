<script setup lang="ts">
  import type { IVOptionInstance, IVOptionProps, IVOptionSlots } from './types';
  import { useSelectContext } from './context';
  import { useOption } from './composables';
  import { onUnmounted, reactive } from 'vue';

  const props = defineProps<IVOptionProps>();

  defineSlots<IVOptionSlots>();

  const Select = useSelectContext();

  const { id, isActive, isDisabled, handleChange } = useOption({
    context: Select,
    props
  });

  const optionInstance = reactive<IVOptionInstance>({
    id,
    props
  });

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
