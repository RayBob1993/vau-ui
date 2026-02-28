<script lang="ts" setup>
  import type { IVSelectProps, IVSelectEmits, IVSelectModelValue } from './types';
  import { VSelectContextKey } from './context';
  import { useSelect } from './composables';
  import { VScrollbar } from '../../Scrollbar';
  import { computed, provide, watch } from 'vue';
  import { type Booleanish, booleanToBooleanish } from '@vau/core';

  const props = defineProps<IVSelectProps>();
  const emit = defineEmits<IVSelectEmits>();

  const modelValue = defineModel<IVSelectModelValue>({
    required: true
  });

  const {
    isOpen,
    toggleOpen,
    hasValue,
    isDisabled,
    activeValue,
    validationStatus,
    handleRemoveTag,
    handleClear,
    handleChange,
    registerOption,
    unregisterOption
  } = useSelect({
    modelValue: () => modelValue.value,
    props,
    onChangeModel: value => {
      modelValue.value = value;
    },
    onChange: value => {
      emit('change', value);
    },
    onClear: () => {
      emit('clear');
    },
  });

  const ariaExpanded = computed<Booleanish>(() => booleanToBooleanish(isOpen.value));

  function handleAfterEnter (payload: Element) {
    emit('opened', payload);
  }

  function handleAfterLeave (payload: Element) {
    emit('closed', payload);
  }

  watch(isOpen, value => {
    if (value) {
      emit('open');
    } else {
      emit('close');
    }
  });

  provide(VSelectContextKey, {
    props,
    modelValue,
    hasValue,
    isDisabled,
    handleChange,
    registerOption,
    unregisterOption
  });
</script>

<template>
  <div
    class="v-select"
    :class="{
      'v-select--open': isOpen,
      'v-select--disabled': isDisabled,
      'v-select--multiple': multiple,
      'v-select--invalid': validationStatus?.isError,
      'v-select--valid': validationStatus?.isSuccess
    }"
    tabindex="0"
    role="combobox"
    :aria-expanded="ariaExpanded"
    :aria-disabled="isDisabled"
    aria-haspopup="listbox"
  >
    <div
      class="v-select__value"
      @click="toggleOpen"
    >
      <template v-if="hasValue">
        <template v-if="activeValue && multiple && Array.isArray(activeValue)">
          <span
            v-for="option in activeValue"
            :key="option.props.value"
          >
            {{ option.props.label }}

            <button
              type="button"
              @click.stop="handleRemoveTag(option.props.value)"
            >
              ×
            </button>
          </span>
        </template>

        <span v-if="activeValue && !Array.isArray(activeValue)">
          {{ activeValue.props.label }}
        </span>

        <button
          v-if="clearable"
          class="v-select__clear"
          type="button"
          @click.stop="handleClear"
        >
          ×
        </button>
      </template>

      <span v-else>
        {{ placeholder }}
      </span>

      <span
        class="v-select__arrow"
        :class="{
          'v-select__arrow--open': isOpen
        }"
      >
        {{ isOpen ? '▲' : '▼' }}
      </span>
    </div>

    <transition
      @after-enter="handleAfterEnter"
      @after-leave="handleAfterLeave"
    >
      <div
        v-if="isOpen"
        class="v-select__dropdown"
        role="listbox"
      >
        <div
          v-if="searchable"
          class="v-select__search"
        >
          <input
            type="text"
            class="v-select__search-input"
            placeholder="Поиск..."
            @keydown.stop
          >
        </div>

        <div class="v-select__options">
          <v-scrollbar class="v-select__scrollbar">
            <slot/>
          </v-scrollbar>
        </div>
      </div>
    </transition>
  </div>
</template>
