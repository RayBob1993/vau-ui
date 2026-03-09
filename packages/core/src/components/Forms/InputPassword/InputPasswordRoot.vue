<script setup lang="ts">
  import type { InputPasswordProps } from './types';
  import { useInputPasswordRoot } from './composables';
  import { Input, type InputModelValue, type InputSlots } from '../Input';

  const props = defineProps<InputPasswordProps>();

  const slots = defineSlots<InputSlots>();

  const modelValue = defineModel<InputModelValue>({
    required: true
  });

  const { currentType, handleToggleType } = useInputPasswordRoot();
</script>

<template>
  <Input.Root
    v-slot="scopedSlot"
    v-bind="props"
    v-model="modelValue"
    :native-type="currentType"
  >
    <Input.Before v-if="slots?.before">
      <slot
        name="before"
        v-bind="scopedSlot"
      />
    </Input.Before>

    <Input.Control>
      <Input.Native/>
    </Input.Control>

    <Input.After>
      <slot
        name="after"
        v-bind="scopedSlot"
      >
        <button
          type="button"
          @click="handleToggleType"
        >
          @
        </button>
      </slot>
    </Input.After>
  </Input.Root>
</template>
