import { FlexPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('FlexPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(FlexPlugin.install).toBeDefined();
    expect(typeof FlexPlugin.install).toBe('function');
  });
});
