import { describe, expect, it } from 'vitest';
import { FormPlugin } from '../plugin';

describe('FormPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(FormPlugin.install).toBeDefined();
    expect(typeof FormPlugin.install).toBe('function');
  });
});
