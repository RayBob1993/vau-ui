<script setup lang="ts">
  import { Input } from '@vau/core';
  import '@vau/theme-base';
  import { ref } from 'vue';

  const model = ref();
</script>

<template>
  <Input.Root
    v-model="model"
    placeholder="ывамывам"
  >
    <Input.Before/>

    <Input.Control>
      <Input.Native/>
    </Input.Control>

    <Input.After/>
  </Input.Root>

  <Input.Root
    v-model="model"
    placeholder="ывамывам"
  >
    <Input.Before/>

    <Input.Control>
      <Input.Textarea/>
    </Input.Control>

    <Input.After/>
  </Input.Root>

  {{ model }}
</template>
