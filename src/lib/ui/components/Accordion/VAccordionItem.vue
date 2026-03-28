<script setup lang="ts">
  import type { VAccordionItemProps, VAccordionItemSlots } from './types';
  import { Accordion } from '@vau/core';

  const { title, ...accordionItemProps } = defineProps<VAccordionItemProps>();

  defineSlots<VAccordionItemSlots>();
</script>

<template>
  <Accordion.Item
    v-slot="{ isActive }"
    v-bind="accordionItemProps"
  >
    <Accordion.Header>
      <Accordion.Trigger>
        <Accordion.Title>
          <slot name="title">
            {{ title }}
          </slot>
        </Accordion.Title>
      </Accordion.Trigger>
    </Accordion.Header>

    <Accordion.Body>
      <slot :is-active="isActive"/>
    </Accordion.Body>
  </Accordion.Item>
</template>
