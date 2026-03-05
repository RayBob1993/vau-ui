import { TagGroupPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('TagGroupPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(TagGroupPlugin.install).toBeDefined();
    expect(typeof TagGroupPlugin.install).toBe('function');
  });
});
