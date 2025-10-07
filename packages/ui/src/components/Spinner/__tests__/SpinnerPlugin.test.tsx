import { describe, expect, it } from 'vitest';
import { SpinnerPlugin } from '../plugin';

describe('SpinnerPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(SpinnerPlugin.install).toBeDefined();
    expect(typeof SpinnerPlugin.install).toBe('function');
  });
});
