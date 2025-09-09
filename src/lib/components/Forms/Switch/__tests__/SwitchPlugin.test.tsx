import { describe, expect, it } from 'vitest';
import { SwitchPlugin } from '../plugin';

describe('SwitchPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(SwitchPlugin.install).toBeDefined();
    expect(typeof SwitchPlugin.install).toBe('function');
  });
});
