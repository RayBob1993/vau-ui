import { describe, expect, it } from 'vitest';
import { CheckboxGroupPlugin } from '../plugin';

describe('CheckboxGroupPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(CheckboxGroupPlugin.install).toBeDefined();
    expect(typeof CheckboxGroupPlugin.install).toBe('function');
  });
});
