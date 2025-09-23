import { describe, expect, it } from 'vitest';
import { RadioButtonPlugin } from '../plugin';

describe('RadioButtonPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(RadioButtonPlugin.install).toBeDefined();
    expect(typeof RadioButtonPlugin.install).toBe('function');
  });
});
