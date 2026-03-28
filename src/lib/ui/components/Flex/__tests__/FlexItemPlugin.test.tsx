import { FlexItemPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('FlexItemPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(FlexItemPlugin.install).toBeDefined();
    expect(typeof FlexItemPlugin.install).toBe('function');
  });
});
