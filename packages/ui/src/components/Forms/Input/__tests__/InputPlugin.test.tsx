import { describe, expect, it } from 'vitest';
import { InputPlugin } from '../plugin';

describe('InputPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(InputPlugin.install).toBeDefined();
    expect(typeof InputPlugin.install).toBe('function');
  });
});
