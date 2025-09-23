import { describe, expect, it } from 'vitest';
import { CheckboxButtonPlugin } from '../plugin';

describe('CheckboxButtonPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(CheckboxButtonPlugin.install).toBeDefined();
    expect(typeof CheckboxButtonPlugin.install).toBe('function');
  });
});
