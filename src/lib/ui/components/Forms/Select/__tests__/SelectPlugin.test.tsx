import { SelectPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('SelectPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(SelectPlugin.install).toBeDefined();
    expect(typeof SelectPlugin.install).toBe('function');
  });
});
