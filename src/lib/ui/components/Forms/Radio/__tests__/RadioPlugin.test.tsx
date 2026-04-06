import { RadioPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('RadioPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(RadioPlugin.install).toBeDefined();
    expect(typeof RadioPlugin.install).toBe('function');
  });
});
