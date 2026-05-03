<script setup lang="ts">
  import { Button } from 'vau';
</script>

<template>
  <Button.Root size="medium">
    Без темы
  </Button.Root>

  <Button.Root
    theme="base"
    size="medium"
    class="m-l-8"
  >
    Base
  </Button.Root>

  <Button.Root
    theme="primary"
    size="medium"
    class="m-l-8"
  >
    Primary
  </Button.Root>

  <Button.Root
    theme="secondary"
    size="medium"
    class="m-l-8"
  >
    Secondary
  </Button.Root>

  <Button.Root
    theme="tertiary"
    size="medium"
    class="m-l-8"
  >
    Tertiary
  </Button.Root>

  <Button.Root
    theme="danger"
    size="medium"
    class="m-l-8"
  >
    Danger
  </Button.Root>

  <Button.Root
    theme="success"
    size="medium"
    class="m-l-8"
  >
    Success
  </Button.Root>

  <Button.Root
    theme="warning"
    size="medium"
    class="m-l-8"
  >
    Warning
  </Button.Root>
</template>

