import { describe, expect, it } from 'vitest';
import { CheckboxPlugin } from '../plugin';

describe('CheckboxPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(CheckboxPlugin.install).toBeDefined();
    expect(typeof CheckboxPlugin.install).toBe('function');
  });
});
