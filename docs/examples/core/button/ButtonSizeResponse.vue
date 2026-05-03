<script setup lang="ts">
  import { Button } from 'vau';
</script>

<template>
  <Button.Root
    theme="base"
    size="mini"
    size-xs="large"
  >
    Mini
  </Button.Root>

  <Button.Root
    theme="base"
    size="small"
    size-md="medium"
    class="m-l-8"
  >
    Small
  </Button.Root>

  <Button.Root
    theme="base"
    size="medium"
    size-lg="large"
    class="m-l-8"
  >
    Medium
  </Button.Root>

  <Button.Root
    theme="base"
    size="large"
    size-md="small"
    class="m-l-8"
  >
    Large
  </Button.Root>

  <Button.Root
    theme="base"
    size="big"
    size-xxl="mini"
    class="m-l-8"
  >
    Big
  </Button.Root>

  <Button.Root
    theme="base"
    size="huge"
    size-sm="small"
    class="m-l-8"
  >
    Huge
  </Button.Root>

  <Button.Root
    theme="base"
    size="massive"
    size-md="medium"
    class="m-l-8"
  >
    Massive
  </Button.Root>
</template>
