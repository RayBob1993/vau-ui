import { describe, expect, it } from 'vitest';
import { InplacePlugin } from '../plugin';

describe('InplacePlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(InplacePlugin.install).toBeDefined();
    expect(typeof InplacePlugin.install).toBe('function');
  });
});
