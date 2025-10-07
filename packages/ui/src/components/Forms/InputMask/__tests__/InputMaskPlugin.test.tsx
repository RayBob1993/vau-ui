import { describe, expect, it } from 'vitest';
import { InputMaskPlugin } from '../plugin';

describe('InputMaskPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(InputMaskPlugin.install).toBeDefined();
    expect(typeof InputMaskPlugin.install).toBe('function');
  });
});
