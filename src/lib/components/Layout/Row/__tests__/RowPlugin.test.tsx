import { describe, expect, it } from 'vitest';
import { RowPlugin } from '../plugin';

describe('RowPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(RowPlugin.install).toBeDefined();
    expect(typeof RowPlugin.install).toBe('function');
  });
});
