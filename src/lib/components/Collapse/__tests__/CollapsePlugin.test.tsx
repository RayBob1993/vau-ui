import { describe, expect, it } from 'vitest';
import { CollapsePlugin } from '../plugin';

describe('CollapsePlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(CollapsePlugin.install).toBeDefined();
    expect(typeof CollapsePlugin.install).toBe('function');
  });
});
