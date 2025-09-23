<script setup lang="ts">
  import { VSelect, VOption } from './lib';
  import { ref } from 'vue';

  const model = ref([]);
</script>

<template>
  <v-select
    v-model:value="model"
    multiple
    clearable
    searchable
    placeholder="Выберите вариант"
  >
    <v-option
      label="1"
      value="1"
      disabled
    />

    <v-option
      label="2"
      value="2"
    />

    <v-option
      label="3"
      value="3"
    />

    <v-option
      label="4"
      value="4"
    />
  </v-select>
</template>
