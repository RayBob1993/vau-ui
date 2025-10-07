import { describe, expect, it } from 'vitest';
import { ScrollbarPlugin } from '../plugin';

describe('ScrollbarPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(ScrollbarPlugin.install).toBeDefined();
    expect(typeof ScrollbarPlugin.install).toBe('function');
  });
});
