import type { VNode } from 'vue';

export type UnscopedSlot = (scope: Record<string, never>) => Array<VNode>;
