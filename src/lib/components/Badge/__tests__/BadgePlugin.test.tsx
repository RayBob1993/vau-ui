import { describe, expect, it } from 'vitest';
import { BadgePlugin } from '../plugin';

describe('BadgePlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(BadgePlugin.install).toBeDefined();
    expect(typeof BadgePlugin.install).toBe('function');
  });
});
