import { describe, expect, it } from 'vitest';
import { ImagePlugin } from '../plugin';

describe('ImagePlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(ImagePlugin.install).toBeDefined();
    expect(typeof ImagePlugin.install).toBe('function');
  });
});
