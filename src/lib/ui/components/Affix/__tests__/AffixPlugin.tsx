import { describe, expect, it } from 'vitest';
import { AffixPlugin } from '../plugin';

describe('AffixPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(AffixPlugin.install).toBeDefined();
    expect(typeof AffixPlugin.install).toBe('function');
  });
});
