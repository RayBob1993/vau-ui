<script setup lang="ts">
  import type { IVAlertProps, IVAlertSlots } from './types';
  import { Alert } from '@vau/core';
  import { computed } from 'vue';

  const { title, description, closable, ...alertProps } = defineProps<IVAlertProps>();
  const slots = defineSlots<IVAlertSlots>();

  const isTitleVisible = computed<boolean>(() => Boolean(title || slots?.title));
  const isIconVisible = computed<boolean>(() => Boolean(slots?.icon));
  const isDescriptionVisible = computed<boolean>(() => Boolean(description || slots?.description));
</script>

<template>
  <Alert.Root v-bind="alertProps">
    <Alert.Header>
      <Alert.Indicator v-if="isIconVisible">
        <slot name="icon"/>
      </Alert.Indicator>

      <Alert.Title v-if="isTitleVisible">
        <slot name="title">
          {{ title }}
        </slot>
      </Alert.Title>

      <Alert.Close v-if="closable"/>
    </Alert.Header>

    <Alert.Body>
      <Alert.Description v-if="isDescriptionVisible">
        <slot name="description">
          {{ description }}
        </slot>
      </Alert.Description>

      <slot v-else/>
    </Alert.Body>
  </Alert.Root>
</template>
