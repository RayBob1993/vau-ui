import { describe, expect, it } from 'vitest';
import { DrawerPlugin } from '../plugin';

describe('DrawerPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(DrawerPlugin.install).toBeDefined();
    expect(typeof DrawerPlugin.install).toBe('function');
  });
});
