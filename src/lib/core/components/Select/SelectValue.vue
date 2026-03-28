<script setup lang="ts">
  import { useSelectRootContext } from './context';
  import { useSelectValue } from './composables';

  const selectRootContext = useSelectRootContext();

  const { activeOptionValue, activeOptions, hasValue, isMultiple, placeholder, toggle } = useSelectValue({
    selectRootContext
  });
</script>

<template>
  <div
    class="select-value"
    @click="toggle"
  >
    <slot>
      <template v-if="hasValue">
        <template v-if="isMultiple">
          <template v-for="option in activeOptions">
            {{ option.props.value }}
          </template>
        </template>

        <template v-else>
          {{ activeOptionValue }}
        </template>
      </template>

      <template v-else>
        {{ placeholder }}
      </template>
    </slot>
  </div>
</template>
