import { describe, expect, it } from 'vitest';
import { ColPlugin } from '../plugin';

describe('ColPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(ColPlugin.install).toBeDefined();
    expect(typeof ColPlugin.install).toBe('function');
  });
});
