import { describe, expect, it } from 'vitest';
import { PlaceholderPlugin } from '../plugin';

describe('PlaceholderPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(PlaceholderPlugin.install).toBeDefined();
    expect(typeof PlaceholderPlugin.install).toBe('function');
  });
});
