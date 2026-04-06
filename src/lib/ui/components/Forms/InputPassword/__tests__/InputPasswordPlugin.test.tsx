import { InputPasswordPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('InputPasswordPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(InputPasswordPlugin.install).toBeDefined();
    expect(typeof InputPasswordPlugin.install).toBe('function');
  });
});
