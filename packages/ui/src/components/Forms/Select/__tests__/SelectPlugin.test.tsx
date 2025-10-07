import { describe, expect, it } from 'vitest';
import { SelectPlugin } from '../plugin';

describe('SelectPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(SelectPlugin.install).toBeDefined();
    expect(typeof SelectPlugin.install).toBe('function');
  });
});
