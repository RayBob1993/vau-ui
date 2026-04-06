import { DrawerPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('DrawerPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(DrawerPlugin.install).toBeDefined();
    expect(typeof DrawerPlugin.install).toBe('function');
  });
});
