import { SwitchPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('SwitchPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(SwitchPlugin.install).toBeDefined();
    expect(typeof SwitchPlugin.install).toBe('function');
  });
});
