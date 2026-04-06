import { DividerPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('DividerPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(DividerPlugin.install).toBeDefined();
    expect(typeof DividerPlugin.install).toBe('function');
  });
});
