import { InputPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('InputPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(InputPlugin.install).toBeDefined();
    expect(typeof InputPlugin.install).toBe('function');
  });
});
