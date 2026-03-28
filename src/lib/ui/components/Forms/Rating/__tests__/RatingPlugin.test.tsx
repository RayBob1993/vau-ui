import { RatingPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('RatingPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(RatingPlugin.install).toBeDefined();
    expect(typeof RatingPlugin.install).toBe('function');
  });
});
