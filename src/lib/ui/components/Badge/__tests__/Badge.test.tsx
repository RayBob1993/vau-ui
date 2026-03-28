import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import VBadge from '../VBadge.vue';

describe('VBadge', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VBadge/>
    ));

    expect(wrapper.exists()).toBeTruthy();
  });
});
