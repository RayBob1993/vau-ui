import { Section } from '../index';
import { Sizes } from '../../../constants/sizes';
import { Themes } from '../../../constants/themes';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

describe('Section', () => {
  describe('Root', () => {
    it('рендерит section с базовым классом и содержимым слота', () => {
      const wrapper = mount(() => (
        <Section.Root>
          <p class="slot-content">Текст</p>
        </Section.Root>
      ));

      const root = wrapper.get('section.section');

      expect(root.find('.slot-content').text()).toBe('Текст');
    });

    it('добавляет класс темы при передаче theme', () => {
      const wrapper = mount(() => (
        <Section.Root theme={Themes.PRIMARY}/>
      ));

      expect(wrapper.get('section').classes()).toContain(`section--theme-${Themes.PRIMARY}`);
    });

    it('добавляет класс размера при передаче size', () => {
      const wrapper = mount(() => (
        <Section.Root size={Sizes.MEDIUM}/>
      ));

      expect(wrapper.get('section').classes()).toContain(`section--size-${Sizes.MEDIUM}`);
    });

    it('добавляет класс адаптивного размера для breakpoint', () => {
      const wrapper = mount(() => (
        <Section.Root sizeXs={Sizes.MINI}/>
      ));

      expect(wrapper.get('section').classes()).toContain(`section--size-xs-${Sizes.MINI}`);
    });
  });

  describe('Header', () => {
    it('рендерит header с классом и слотом', () => {
      const wrapper = mount(() => (
        <Section.Header>
          <span>Заголовок блока</span>
        </Section.Header>
      ));

      const el = wrapper.get('header.section-header');

      expect(el.find('span').text()).toBe('Заголовок блока');
    });
  });

  describe('Body', () => {
    it('рендерит div с классом и слотом', () => {
      const wrapper = mount(() => (
        <Section.Body>
          <article>Контент</article>
        </Section.Body>
      ));

      const el = wrapper.get('div.section-body');

      expect(el.find('article').text()).toBe('Контент');
    });
  });

  describe('Footer', () => {
    it('рендерит footer с классом и слотом', () => {
      const wrapper = mount(() => (
        <Section.Footer>
          <small>Подвал</small>
        </Section.Footer>
      ));

      const el = wrapper.get('footer.section-footer');

      expect(el.find('small').text()).toBe('Подвал');
    });
  });

  describe('Title', () => {
    it('по умолчанию рендерит h1 с классами уровня', () => {
      const wrapper = mount(() => (
        <Section.Title>Заголовок</Section.Title>
      ));

      const el = wrapper.get('h1.section-title');

      expect(el.classes()).toContain('section-title--level-h1');
      expect(el.text()).toBe('Заголовок');
    });

    it('рендерит выбранный уровень заголовка', () => {
      const wrapper = mount(() => (
        <Section.Title level="h3">Раздел</Section.Title>
      ));

      const el = wrapper.get('h3.section-title');

      expect(el.classes()).toContain('section-title--level-h3');
      expect(el.text()).toBe('Раздел');
    });
  });

  describe('композиция', () => {
    it('собирает полную секцию с вложенными частями', () => {
      const wrapper = mount(() => (
        <Section.Root theme={Themes.SECONDARY} size={Sizes.SMALL}>
          <Section.Header>
            <Section.Title level="h2">Название</Section.Title>
          </Section.Header>
          <Section.Body>
            <p>Основной текст</p>
          </Section.Body>
          <Section.Footer>
            <span>Низ</span>
          </Section.Footer>
        </Section.Root>
      ));

      const section = wrapper.get('section.section');

      expect(section.classes()).toContain(`section--theme-${Themes.SECONDARY}`);
      expect(section.classes()).toContain(`section--size-${Sizes.SMALL}`);

      expect(section.find('header.section-header').exists()).toBe(true);
      expect(section.find('h2.section-title.section-title--level-h2').text()).toBe('Название');
      expect(section.find('div.section-body p').text()).toBe('Основной текст');
      expect(section.find('footer.section-footer span').text()).toBe('Низ');
    });
  });
});
