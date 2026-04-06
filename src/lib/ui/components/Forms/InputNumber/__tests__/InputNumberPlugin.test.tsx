import { InputNumberPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('InputNumberPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(InputNumberPlugin.install).toBeDefined();
    expect(typeof InputNumberPlugin.install).toBe('function');
  });
});
