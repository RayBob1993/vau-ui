import { describe, expect, it } from 'vitest';
import { RadioGroupPlugin } from '../plugin';

describe('RadioGroupPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(RadioGroupPlugin.install).toBeDefined();
    expect(typeof RadioGroupPlugin.install).toBe('function');
  });
});
