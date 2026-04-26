import { Text } from '../index';
import { Sizes } from '../../../constants/sizes';
import { Themes } from '../../../constants/themes';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

describe('Text', () => {
  describe('Root', () => {
    it('по умолчанию рендерит div с базовым классом и слотом', () => {
      const wrapper = mount(() => (
        <Text.Root>Содержимое</Text.Root>
      ));

      const root = wrapper.get('div.text');

      expect(root.text()).toBe('Содержимое');
    });

    it('рендерит указанный тег через as', () => {
      const wrapper = mount(() => (
        <Text.Root as="p">Абзац</Text.Root>
      ));

      const el = wrapper.get('p.text');

      expect(el.text()).toBe('Абзац');
    });

    it('добавляет класс темы при передаче theme', () => {
      const wrapper = mount(() => (
        <Text.Root theme={Themes.SUCCESS}/>
      ));

      expect(wrapper.get('div').classes()).toContain(`text--theme-${Themes.SUCCESS}`);
    });

    it('добавляет класс размера при передаче size', () => {
      const wrapper = mount(() => (
        <Text.Root size={Sizes.LARGE}/>
      ));

      expect(wrapper.get('div').classes()).toContain(`text--size-${Sizes.LARGE}`);
    });

    it('добавляет класс адаптивного размера для breakpoint', () => {
      const wrapper = mount(() => (
        <Text.Root sizeSm={Sizes.SMALL}/>
      ));

      expect(wrapper.get('div').classes()).toContain(`text--size-sm-${Sizes.SMALL}`);
    });

    it('добавляет модификаторы uppercase и underline', () => {
      const wrapper = mount(() => (
        <Text.Root uppercase underline/>
      ));

      const el = wrapper.get('div');

      expect(el.classes()).toContain('text--uppercase');
      expect(el.classes()).toContain('text--underline');
    });

    it('добавляет класс начертания при передаче weight', () => {
      const wrapper = mount(() => (
        <Text.Root weight="600"/>
      ));

      expect(wrapper.get('div').classes()).toContain('text--weight-600');
    });

    it('прокидывает классы на дочерний элемент при asChild', () => {
      const wrapper = mount(() => (
        <Text.Root asChild theme={Themes.PRIMARY}>
          <a href="#test">Ссылка</a>
        </Text.Root>
      ));

      const link = wrapper.get('a[href="#test"]');

      expect(link.classes()).toContain('text');
      expect(link.classes()).toContain(`text--theme-${Themes.PRIMARY}`);
      expect(link.text()).toBe('Ссылка');
    });
  });
});
