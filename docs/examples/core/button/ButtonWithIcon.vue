<script setup lang="ts">
  import { Button } from 'vau';
  import { User } from '@lucide/vue';
</script>

<template>
  <Button.Root
    theme="base"
    size="mini"
    class="m-l-8"
  >
    <user :size="12"/>

    Mini
  </Button.Root>

  <Button.Root
    theme="primary"
    size="small"
    class="m-l-8"
  >
    <user :size="14"/>

    Small
  </Button.Root>

  <Button.Root
    theme="secondary"
    size="medium"
    class="m-l-8"
  >
    <user :size="16"/>

    Medium
  </Button.Root>

  <Button.Root
    theme="tertiary"
    size="large"
    class="m-l-8"
  >
    <user :size="18"/>

    Large
  </Button.Root>

  <Button.Root
    theme="danger"
    size="big"
    class="m-l-8"
  >
    <user :size="20"/>

    Big
  </Button.Root>

  <Button.Root
    theme="warning"
    size="huge"
    class="m-l-8"
  >
    <user :size="22"/>

    Huge
  </Button.Root>

  <Button.Root
    theme="success"
    size="massive"
    class="m-l-8"
  >
    <user :size="24"/>

    Massive
  </Button.Root>
</template>
