import { FormPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('FormPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(FormPlugin.install).toBeDefined();
    expect(typeof FormPlugin.install).toBe('function');
  });
});
