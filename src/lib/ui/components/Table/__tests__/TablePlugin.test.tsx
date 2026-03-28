import { TablePlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('TablePlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(TablePlugin.install).toBeDefined();
    expect(typeof TablePlugin.install).toBe('function');
  });
});
