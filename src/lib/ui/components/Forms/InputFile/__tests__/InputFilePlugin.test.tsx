import { describe, expect, it } from 'vitest';
import { InputFilePlugin } from '../plugin';

describe('InputFilePlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(InputFilePlugin.install).toBeDefined();
    expect(typeof InputFilePlugin.install).toBe('function');
  });
});
