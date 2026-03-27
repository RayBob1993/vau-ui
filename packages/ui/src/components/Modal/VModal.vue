<script lang="ts" setup>
  import type { IVModalProps, IVModalSlots } from './types';
  import { Modal, type ModalEmits } from '@vau/core';

  const { title, appendToBody = true, ...modalRootProps } = defineProps<IVModalProps>();
  const emit = defineEmits<ModalEmits>();
  const slots = defineSlots<IVModalSlots>();

  const modelValue = defineModel<boolean>({
    required: true,
  });
</script>

<template>
  <Modal.Root
    v-model="modelValue"
    v-bind="modalRootProps"
    :append-to-body="appendToBody"
    @close="emit('close')"
    @open="emit('open')"
    @opened="emit('opened', $event)"
    @closed="emit('closed', $event)"
  >
    <Modal.Dialog>
      <Modal.Content>
        <Modal.Header>
          <slot name="header">
            <Modal.Title v-if="title">
              {{ title }}
            </Modal.Title>

            <Modal.Close>X</Modal.Close>
          </slot>
        </Modal.Header>

        <Modal.Body>
          <slot/>
        </Modal.Body>

        <Modal.Footer v-if="slots?.footer">
          <slot name="footer"/>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Dialog>
  </Modal.Root>
</template>
