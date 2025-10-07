import { describe, expect, it } from 'vitest';
import { InputNumberPlugin } from '../plugin';

describe('InputNumberPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(InputNumberPlugin.install).toBeDefined();
    expect(typeof InputNumberPlugin.install).toBe('function');
  });
});
