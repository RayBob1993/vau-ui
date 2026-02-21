<script setup lang="ts">
  import { VAccordion, VAccordionItem } from '@vau/ui';
  import '@vau/theme-base';
  import { ref } from 'vue';
  import type { AccordionModelValue } from '@vau/core';

  const model = ref<AccordionModelValue>([]);
</script>

<template>
  <v-accordion
    v-model="model"
    multiple
  >
    <v-accordion-item
      v-slot="{ isActive }"
      title="1"
      value="1"
    >
      {{ isActive }}
    </v-accordion-item>

    <v-accordion-item
      title="2"
      value="2"
    >
      sdfvsdsfv
    </v-accordion-item>

    <v-accordion-item
      title="3"
      value="3"
    >
      sdfvsdsfv
    </v-accordion-item>
  </v-accordion>
</template>
