import { describe, expect, it } from 'vitest';
import { InputCodePlugin } from '../plugin';

describe('InputCodePlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(InputCodePlugin.install).toBeDefined();
    expect(typeof InputCodePlugin.install).toBe('function');
  });
});
