import { TagPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('TagPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(TagPlugin.install).toBeDefined();
    expect(typeof TagPlugin.install).toBe('function');
  });
});
