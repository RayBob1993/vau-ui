import { describe, expect, it } from 'vitest';
import { OverlayPlugin } from '../plugin';

describe('OverlayPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(OverlayPlugin.install).toBeDefined();
    expect(typeof OverlayPlugin.install).toBe('function');
  });
});
