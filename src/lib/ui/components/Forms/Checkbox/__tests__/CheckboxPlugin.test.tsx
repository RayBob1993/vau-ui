import { CheckboxPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('CheckboxPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(CheckboxPlugin.install).toBeDefined();
    expect(typeof CheckboxPlugin.install).toBe('function');
  });
});
