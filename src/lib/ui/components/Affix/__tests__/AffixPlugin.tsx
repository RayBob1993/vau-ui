import { AffixPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('AffixPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(AffixPlugin.install).toBeDefined();
    expect(typeof AffixPlugin.install).toBe('function');
  });
});
