import { describe, expect, it } from 'vitest';
import { FormItemPlugin } from '../plugin';

describe('FormItemPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(FormItemPlugin.install).toBeDefined();
    expect(typeof FormItemPlugin.install).toBe('function');
  });
});
