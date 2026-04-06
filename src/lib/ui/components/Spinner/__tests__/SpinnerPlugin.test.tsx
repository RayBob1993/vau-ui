import { SpinnerPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('SpinnerPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(SpinnerPlugin.install).toBeDefined();
    expect(typeof SpinnerPlugin.install).toBe('function');
  });
});
