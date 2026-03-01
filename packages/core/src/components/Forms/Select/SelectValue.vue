<script setup lang="ts">
  import { useSelectRootContext } from './context';
  import { useSelectValue } from './composables';

  const SelectRootContext = useSelectRootContext();

  const { activeOption, activeOptions, hasValue, isMultiple, placeholder } = useSelectValue({
    selectRootContext: SelectRootContext
  });
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
