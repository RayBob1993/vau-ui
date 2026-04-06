import { ScrollbarPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('ScrollbarPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(ScrollbarPlugin.install).toBeDefined();
    expect(typeof ScrollbarPlugin.install).toBe('function');
  });
});
