import { describe, expect, it } from 'vitest';
import { FlexPlugin } from '../plugin';

describe('FlexPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(FlexPlugin.install).toBeDefined();
    expect(typeof FlexPlugin.install).toBe('function');
  });
});
