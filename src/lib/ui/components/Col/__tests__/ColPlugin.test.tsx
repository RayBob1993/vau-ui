import { ColPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('ColPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(ColPlugin.install).toBeDefined();
    expect(typeof ColPlugin.install).toBe('function');
  });
});
