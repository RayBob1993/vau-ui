<script lang="ts" setup>
  import { Select, type SelectProps, type SelectModelValue, type SelectEmits } from '@vau/core';

  const props = defineProps<SelectProps>();

  const emit = defineEmits<SelectEmits>();

  const modelValue = defineModel<SelectModelValue>({
    required: true
  });
</script>

<template>
  <Select.Root
    v-bind="props"
    v-model="modelValue"
    @change="emit('change', $event)"
    @close="emit('close')"
    @clear="emit('clear')"
  >
    <Select.Value/>

    <Select.Dropdown>
      <slot/>
    </Select.Dropdown>
  </Select.Root>
</template>
