<script setup lang="ts">
  import type { VSectionProps, VSectionSlots } from './types';
  import { Section } from '@vau/core';
  import { computed } from 'vue';

  const props = withDefaults(defineProps<VSectionProps>(), {
    level: 'h1'
  });

  const slots = defineSlots<VSectionSlots>();

  const headerVisible = computed<boolean>(() => Boolean(props.title || slots?.header));
</script>

<template>
  <Section.Root v-bind="props">
    <Section.Header v-if="headerVisible">
      <slot name="header">
        <Section.Title :level="level">
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
