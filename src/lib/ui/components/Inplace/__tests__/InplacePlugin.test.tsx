import { InplacePlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('InplacePlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(InplacePlugin.install).toBeDefined();
    expect(typeof InplacePlugin.install).toBe('function');
  });
});
