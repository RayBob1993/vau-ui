import { CollapsePlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('CollapsePlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(CollapsePlugin.install).toBeDefined();
    expect(typeof CollapsePlugin.install).toBe('function');
  });
});
