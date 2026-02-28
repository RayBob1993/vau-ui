<script setup lang="ts">
  import type { OptionInstance } from './types';
  import type { Maybe } from '../../../types';
  import { useSelectRootContext } from './context';
  import { isSelectMultiple } from './utils';
  import { computed } from 'vue';

  const SelectRootContext = useSelectRootContext();

  const activeOption = computed<Maybe<OptionInstance>>(() => SelectRootContext?.activeOption.value);

  const activeOptions = computed<Array<OptionInstance>>(() => SelectRootContext?.activeOptions.value ?? []);

  const hasValue = computed<boolean>(() => Boolean(SelectRootContext?.hasValue.value));

  const isMultiple = computed<boolean>(() => isSelectMultiple(SelectRootContext?.modelValue.value, Boolean(SelectRootContext?.props.multiple)));

  const placeholder = computed<Maybe<string>>(() => SelectRootContext?.props?.placeholder);
</script>

<template>
  <div class="select-value">
    <slot>
      <template v-if="hasValue">
        <template v-if="isMultiple">
          <template v-for="option in activeOptions">
            {{ option.props.value }}
          </template>
        </template>

        <template v-else>
          {{ activeOption?.props.value }}
        </template>
      </template>

      <template v-else>
        {{ placeholder }}
      </template>
    </slot>
  </div>
</template>
