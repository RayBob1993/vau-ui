import { BadgePlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('BadgePlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(BadgePlugin.install).toBeDefined();
    expect(typeof BadgePlugin.install).toBe('function');
  });
});
