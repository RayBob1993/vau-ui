import { describe, expect, it } from 'vitest';
import { DividerPlugin } from '../plugin';

describe('DividerPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(DividerPlugin.install).toBeDefined();
    expect(typeof DividerPlugin.install).toBe('function');
  });
});
