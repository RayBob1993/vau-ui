import { describe, expect, it } from 'vitest';
import { InputRangePlugin } from '../plugin';

describe('InputRangePlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(InputRangePlugin.install).toBeDefined();
    expect(typeof InputRangePlugin.install).toBe('function');
  });
});
