import { RadioGroupPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('RadioGroupPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(RadioGroupPlugin.install).toBeDefined();
    expect(typeof RadioGroupPlugin.install).toBe('function');
  });
});
