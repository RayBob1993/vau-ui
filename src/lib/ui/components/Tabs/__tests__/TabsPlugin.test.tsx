import { TabsPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('TabsPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(TabsPlugin.install).toBeDefined();
    expect(typeof TabsPlugin.install).toBe('function');
  });
});
