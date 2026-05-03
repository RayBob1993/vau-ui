<script setup lang="ts">
  import { ref } from 'vue';
  import { Button, Drawer } from 'vau';

  const isVisibleDrawerLeft = ref<boolean>(false);
  const isVisibleDrawerRight = ref<boolean>(false);
  const isVisibleDrawerTop = ref<boolean>(false);
  const isVisibleDrawerBottom = ref<boolean>(false);

  function handleDrawerLeftOpen () {
    isVisibleDrawerLeft.value = true;
  }

  function handleDrawerRightOpen () {
    isVisibleDrawerRight.value = true;
  }

  function handleDrawerTopOpen () {
    isVisibleDrawerTop.value = true;
  }

  function handleDrawerBottomOpen () {
    isVisibleDrawerBottom.value = true;
  }
</script>

<template>
  <Button.Group direction="horizontal">
    <Button.Root
      theme="base"
      size="medium"
      @click="handleDrawerLeftOpen"
    >
      Открыть Drawer Left
    </Button.Root>

    <Button.Root
      theme="base"
      size="medium"
      @click="handleDrawerRightOpen"
    >
      Открыть Drawer Right
    </Button.Root>

    <Button.Root
      theme="base"
      size="medium"
      @click="handleDrawerTopOpen"
    >
      Открыть Drawer Top
    </Button.Root>

    <Button.Root
      theme="base"
      size="medium"
      @click="handleDrawerBottomOpen"
    >
      Открыть Drawer Bottom
    </Button.Root>
  </Button.Group>

  <Drawer.Root
    v-model="isVisibleDrawerLeft"
    position="left"
  >
    <Drawer.Dialog>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>
            Drawer Left
          </Drawer.Title>

          <Drawer.Close/>
        </Drawer.Header>

        <Drawer.Body/>

        <Drawer.Footer/>
      </Drawer.Content>
    </Drawer.Dialog>
  </Drawer.Root>

  <Drawer.Root
    v-model="isVisibleDrawerRight"
    position="right"
  >
    <Drawer.Dialog>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>
            Drawer Right
          </Drawer.Title>

          <Drawer.Close/>
        </Drawer.Header>

        <Drawer.Body/>

        <Drawer.Footer/>
      </Drawer.Content>
    </Drawer.Dialog>
  </Drawer.Root>

  <Drawer.Root
    v-model="isVisibleDrawerTop"
    position="top"
  >
    <Drawer.Dialog>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>
            Drawer Top
          </Drawer.Title>

          <Drawer.Close/>
        </Drawer.Header>

        <Drawer.Body/>

        <Drawer.Footer/>
      </Drawer.Content>
    </Drawer.Dialog>
  </Drawer.Root>

  <Drawer.Root
    v-model="isVisibleDrawerBottom"
    position="bottom"
  >
    <Drawer.Dialog>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>
            Drawer Bottom
          </Drawer.Title>

          <Drawer.Close/>
        </Drawer.Header>

        <Drawer.Body/>

        <Drawer.Footer/>
      </Drawer.Content>
    </Drawer.Dialog>
  </Drawer.Root>
</template>
