import { describe, it, expect } from 'vitest';
import { mount } from "@vue/test-utils";
import VButton from '../VButton.vue';
import VForm from '../../Forms/Form/VForm.vue';
import { Sizes, Themes } from '../../../constants';
import { ref } from "vue";

describe('VButton', () => {
  const DEMO_TEXT = 'Кнопка';

  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VButton>
        {DEMO_TEXT}
      </VButton>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.attributes().type).toEqual('button');
    expect(wrapper.classes()).toContain('v-button');
    expect(wrapper.text()).toEqual(DEMO_TEXT);
  });

  it('Проверка на загрузку', async () => {
    const wrapper = mount(() => (
      <VButton loading={true}/>
    ));

    expect(wrapper.classes()).toContain('v-button--loading');

    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });

  it('Проверка на блокировку', async () => {
    const wrapper = mount(() => (
      <VButton disabled={true}/>
    ));

    expect(wrapper.classes()).toContain('v-button--disabled');

    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });

  it('Проверка на блокировку через VForm', async () => {
    const model = ref({});

    const wrapper = mount(() => (
      <VForm
        v-model:value={model.value}
        disabled={true}
      >
        <VButton/>
      </VForm>
    ));

    const btn = wrapper.findComponent(VButton);

    expect(btn.classes()).toContain('v-button');
    expect(btn.classes()).toContain('v-button--disabled');
    await btn.trigger('click');
    expect(btn.emitted('click')).toBeUndefined();
  });

  it('Проверка на тему', () => {
    const wrapper = mount(() => (
      <VButton theme={Themes.PRIMARY}/>
    ));

    expect(wrapper.classes()).toContain('v-button--theme-primary');
  });

  it('Проверка на размер', () => {
    const wrapper = mount(() => (
      <VButton size={Sizes.MINI}/>
    ));

    expect(wrapper.classes()).toContain('v-button--size-mini');
  });
});
