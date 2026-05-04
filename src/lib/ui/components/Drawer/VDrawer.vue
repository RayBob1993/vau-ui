<script lang="ts" setup>
  import type { IVDrawerProps, IVDrawerSlots } from './types';
  import { Drawer, type DrawerEmits } from '@vau/core';

  const {
    title,
    appendToBody = true,
    position = 'left',
    closeOnEscape = true,
    ...modalRootProps
  } = defineProps<IVDrawerProps>();
  const emit = defineEmits<DrawerEmits>();
  const slots = defineSlots<IVDrawerSlots>();

  const modelValue = defineModel<boolean>({
    required: true,
  });
</script>

<template>
  <Drawer.Root
    v-slot="{ close }"
    v-model="modelValue"
    v-bind="modalRootProps"
    :append-to-body="appendToBody"
    :close-on-escape="closeOnEscape"
    :position="position"
    @close="emit('close')"
    @open="emit('open')"
    @opened="emit('opened', $event)"
    @closed="emit('closed', $event)"
  >
    <Drawer.Dialog>
      <Drawer.Content>
        <Drawer.Header>
          <slot
            name="header"
            :close="close"
          >
            <Drawer.Title v-if="title">
              {{ title }}
            </Drawer.Title>

            <Drawer.Close/>
          </slot>
        </Drawer.Header>

        <Drawer.Body>
          <slot :close="close"/>
        </Drawer.Body>

        <Drawer.Footer v-if="slots?.footer">
          <slot
            name="footer"
            :close="close"
          />
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Dialog>
  </Drawer.Root>
</template>
