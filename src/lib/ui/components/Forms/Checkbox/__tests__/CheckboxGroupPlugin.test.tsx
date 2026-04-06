import { CheckboxGroupPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('CheckboxGroupPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(CheckboxGroupPlugin.install).toBeDefined();
    expect(typeof CheckboxGroupPlugin.install).toBe('function');
  });
});
