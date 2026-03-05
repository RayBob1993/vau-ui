<script lang="ts" setup>
  import { Input, type InputProps, type InputSlots, type InputModelValue } from '@vau/core';

  const props = defineProps<InputProps>();

  const slots = defineSlots<InputSlots>();

  const modelValue = defineModel<InputModelValue>({
    required: true
  });
</script>

<template>
  <Input.Root
    v-slot="{ isTextarea }"
    v-bind="props"
    v-model="modelValue"
  >
    <Input.Before v-if="slots?.before">
      <slot name="before"/>
    </Input.Before>

    <Input.Control>
      <Input.Textarea v-if="isTextarea"/>

      <Input.Native v-else/>
    </Input.Control>

    <Input.After v-if="slots?.after">
      <slot name="after"/>
    </Input.After>
  </Input.Root>
</template>
