<script setup lang="ts">
  import { Button } from 'vau';
  import {
    AlignVerticalJustifyStart,
    AlignVerticalJustifyEnd,
    AlignVerticalJustifyCenter,
    TextAlignCenter,
    TextAlignEnd,
    TextAlignStart
  } from '@lucide/vue';
</script>

<template>
  <Button.Group direction="horizontal">
    <Button.Root
      theme="base"
      size="medium"
    >
      <text-align-start :size="20"/>

      Слева
    </Button.Root>

    <Button.Root
      theme="base"
      size="medium"
    >
      <text-align-center :size="20"/>

      По центру
    </Button.Root>

    <Button.Root
      theme="base"
      size="medium"
    >
      <text-align-end :size="20"/>

      Справа
    </Button.Root>
  </Button.Group>

  <Button.Group
    direction="vertical"
    class="m-l-20"
  >
    <Button.Root
      theme="base"
      size="medium"
    >
      <align-vertical-justify-start :size="20"/>

      Сверху
    </Button.Root>

    <Button.Root
      theme="base"
      size="medium"
    >
      <align-vertical-justify-center :size="20"/>

      По центру
    </Button.Root>

    <Button.Root
      theme="base"
      size="medium"
    >
      <align-vertical-justify-end :size="20"/>

      Снизу
    </Button.Root>
  </Button.Group>
</template>
