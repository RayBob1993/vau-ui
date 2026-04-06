import { InputCodePlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('InputCodePlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(InputCodePlugin.install).toBeDefined();
    expect(typeof InputCodePlugin.install).toBe('function');
  });
});
