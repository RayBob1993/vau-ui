import { describe, expect, it } from 'vitest';
import { TagPlugin } from '../plugin';

describe('TagPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(TagPlugin.install).toBeDefined();
    expect(typeof TagPlugin.install).toBe('function');
  });
});
