<script setup lang="ts">
  import type { VSectionProps, VSectionSlots } from './types';
  import { Section } from '@vau/core';
  import { computed } from 'vue';

  const { title, level = 'h1', ...sectionProps } = defineProps<VSectionProps>();

  const slots = defineSlots<VSectionSlots>();

  const headerVisible = computed<boolean>(() => Boolean(title || slots?.header));
</script>

<template>
  <Section.Root v-bind="sectionProps">
    <Section.Header v-if="headerVisible">
      <slot name="header">
        <Section.Title
          v-if="title"
          :level="level"
        >
          {{ title }}
        </Section.Title>
      </slot>
    </Section.Header>

    <Section.Body>
      <slot/>
    </Section.Body>

    <Section.Footer v-if="slots?.footer">
      <slot name="footer"/>
    </Section.Footer>
  </Section.Root>
</template>
