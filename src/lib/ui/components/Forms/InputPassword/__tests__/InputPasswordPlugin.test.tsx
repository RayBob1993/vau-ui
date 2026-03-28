import { describe, expect, it } from 'vitest';
import { InputPasswordPlugin } from '../plugin';

describe('InputPasswordPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(InputPasswordPlugin.install).toBeDefined();
    expect(typeof InputPasswordPlugin.install).toBe('function');
  });
});
