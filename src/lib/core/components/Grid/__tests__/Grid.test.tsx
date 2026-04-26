import { Grid } from '../index';
import { Sizes } from '../../../constants/sizes';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('Grid', () => {
  describe('Container', () => {
    it('рендерит div с базовым классом и слотом', () => {
      const wrapper = mount(() => (
        <Grid.Container>
          <span class="inner">Контент</span>
        </Grid.Container>
      ));

      const el = wrapper.get('div.container');

      expect(el.find('.inner').text()).toBe('Контент');
    });

    it('добавляет класс размера при передаче size', () => {
      const wrapper = mount(() => (
        <Grid.Container size={Sizes.MEDIUM}/>
      ));

      expect(wrapper.get('div').classes()).toContain(`container--size-${Sizes.MEDIUM}`);
    });
  });

  describe('Row', () => {
    it('рендерит обёртку с классами row и flex', () => {
      const wrapper = mount(() => (
        <Grid.Row>
          <span>Ячейка</span>
        </Grid.Row>
      ));

      const el = wrapper.get('div.row.flex');

      expect(el.find('span').text()).toBe('Ячейка');
    });

    it('по умолчанию включает gutters по горизонтали', () => {
      const wrapper = mount(() => (
        <Grid.Row/>
      ));

      expect(wrapper.get('div').classes()).toContain('row--gutters-x');
    });

    it('добавляет gutters по вертикали при guttersY', () => {
      const wrapper = mount(() => (
        <Grid.Row guttersY/>
      ));

      expect(wrapper.get('div').classes()).toContain('row--gutters-y');
    });

    it('отключает gutters по X при guttersX={false}', () => {
      const wrapper = mount(() => (
        <Grid.Row guttersX={false}/>
      ));

      expect(wrapper.get('div').classes()).not.toContain('row--gutters-x');
    });
  });

  describe('Col', () => {
    it('рендерит div с базовым классом и слотом', () => {
      const wrapper = mount(() => (
        <Grid.Col>
          <p>Колонка</p>
        </Grid.Col>
      ));

      const el = wrapper.get('div.col');

      expect(el.find('p').text()).toBe('Колонка');
    });

    it('добавляет классы размера и breakpoint', () => {
      const wrapper = mount(() => (
        <Grid.Col size={6} sizeMd={12} sizeXs="auto"/>
      ));

      const el = wrapper.get('div');

      expect(el.classes()).toContain('col--size-6');
      expect(el.classes()).toContain('col--size-md-12');
      expect(el.classes()).toContain('col--size-xs-auto');
    });

    it('добавляет классы offset и order', () => {
      const wrapper = mount(() => (
        <Grid.Col offset={2} orderLg={1}/>
      ));

      const el = wrapper.get('div');

      expect(el.classes()).toContain('col--offset-2');
      expect(el.classes()).toContain('col--order-lg-1');
    });
  });

  describe('композиция', () => {
    it('вкладывает Container, Row и Col', () => {
      const wrapper = mount(() => (
        <Grid.Container size={Sizes.SMALL}>
          <Grid.Row>
            <Grid.Col size={12}>Полная ширина</Grid.Col>
          </Grid.Row>
        </Grid.Container>
      ));

      const container = wrapper.get('div.container');

      expect(container.classes()).toContain(`container--size-${Sizes.SMALL}`);
      expect(container.find('div.row div.col').text()).toBe('Полная ширина');
    });
  });
});
