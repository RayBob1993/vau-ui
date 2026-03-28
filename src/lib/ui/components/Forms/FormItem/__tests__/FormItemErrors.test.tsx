import VFormItemErrors from '../VFormItemErrors.vue';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VFormItemErrors.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VFormItemErrors errors={[]}/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-form-item-errors');
  });
});
