import { describe, expect, it } from 'vitest';
import { TabsPlugin } from '../plugin';

describe('TabsPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(TabsPlugin.install).toBeDefined();
    expect(typeof TabsPlugin.install).toBe('function');
  });
});
