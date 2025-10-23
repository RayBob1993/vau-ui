<script lang="ts" setup>
  import type { IVSelectProps, IVSelectEmits, IVSelectModelValue, IVOptionInstance, IVOptionValue } from './types';
  import { VSelectContextKey } from './context';
  import { VScrollbar } from '../../Scrollbar';
  import { useToggle } from '@vau/core';
  import { computed, provide, ref, watch } from 'vue';

  const props = defineProps<IVSelectProps>();
  const emit = defineEmits<IVSelectEmits>();

  const modelValue = defineModel<IVSelectModelValue>({
    required: true
  });

  const [isOpen, , toggleOpen] = useToggle();

  const optionInstances = ref<Array<IVOptionInstance>>([]);

  const hasValue = computed<boolean>(() => {
    if (props.multiple && Array.isArray(modelValue.value)) {
      return modelValue.value.length > 0;
    }

    return Boolean(modelValue.value);
  });

  const isDisabled = computed<boolean>(() => props.disabled);

  const activeValue = computed<IVOptionInstance | Array<IVOptionInstance> | undefined>(() => {
    if (modelValue.value && props.multiple && Array.isArray(modelValue.value)) {
      const arrayValue = modelValue.value;

      return optionInstances.value.filter(option => arrayValue.includes(option.props.value));
    }

    return optionInstances.value.find(option => option.props.value === modelValue.value);
  });

  function handleClear () {
    if (props.multiple && Array.isArray(modelValue.value)) {
      modelValue.value = [];

      emit('change', []);

      return;
    }

    modelValue.value = undefined;

    emit('change', undefined);
  }

  function handleChange (value: IVOptionValue) {
    if (isDisabled.value) {
      return;
    }

    if (props.multiple && Array.isArray(modelValue.value)) {
      const values = new Set<IVOptionValue>([...modelValue.value]);

      if (values.has(value)) {
        values.delete(value);
      } else {
        values.add(value);
      }

      modelValue.value = [...values];

      emit('change', [...values]);

      return;
    }

    modelValue.value = value;

    emit('change', value);
  }

  function handleRemoveTag (value: IVOptionValue) {
    if (!props.multiple || !Array.isArray(modelValue.value)) {
      return;
    }

    const newValue = modelValue.value.filter(val => val !== value);

    modelValue.value = newValue;

    emit('change', newValue);
  }

  function registerOption (newOption: IVOptionInstance) {
    const option: IVOptionInstance | undefined = optionInstances.value.find(option => option.id === newOption.id);

    if (option) {
      return;
    }

    optionInstances.value.push(newOption);
  }

  function unregisterOption (oldOption: IVOptionInstance) {
    optionInstances.value = optionInstances.value.filter(option => option.id !== oldOption.id);
  }

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
      'v-select--multiple': multiple
    }"
    tabindex="0"
    role="combobox"
    :aria-expanded="isOpen"
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
