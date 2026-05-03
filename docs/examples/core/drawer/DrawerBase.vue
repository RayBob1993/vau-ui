<script setup lang="ts">
  import { ref } from 'vue';
  import { Button, Drawer } from 'vau';

  const isVisibleDrawer = ref<boolean>(false);

  function handleOpen () {
    isVisibleDrawer.value = true;
  }
</script>

<template>
  <Button.Root
    theme="base"
    size="medium"
    @click="handleOpen"
  >
    Открыть Drawer
  </Button.Root>

  <Drawer.Root v-model="isVisibleDrawer">
    <Drawer.Dialog>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>
            Заголовок
          </Drawer.Title>

          <Drawer.Close/>
        </Drawer.Header>

        <Drawer.Body/>

        <Drawer.Footer/>
      </Drawer.Content>
    </Drawer.Dialog>
  </Drawer.Root>
</template>
