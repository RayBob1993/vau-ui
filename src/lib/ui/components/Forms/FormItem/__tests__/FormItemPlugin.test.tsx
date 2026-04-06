import { FormItemPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('FormItemPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(FormItemPlugin.install).toBeDefined();
    expect(typeof FormItemPlugin.install).toBe('function');
  });
});
