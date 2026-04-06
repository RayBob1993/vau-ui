import { RowPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('RowPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(RowPlugin.install).toBeDefined();
    expect(typeof RowPlugin.install).toBe('function');
  });
});
