import { describe, expect, it } from 'vitest';
import { RadioPlugin } from '../plugin';

describe('RadioPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(RadioPlugin.install).toBeDefined();
    expect(typeof RadioPlugin.install).toBe('function');
  });
});
