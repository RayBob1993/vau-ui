import { PlaceholderPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('PlaceholderPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(PlaceholderPlugin.install).toBeDefined();
    expect(typeof PlaceholderPlugin.install).toBe('function');
  });
});
