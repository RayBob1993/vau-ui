import { describe, expect, it } from 'vitest';
import { CountdownPlugin } from '../plugin';

describe('CountdownPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(CountdownPlugin.install).toBeDefined();
    expect(typeof CountdownPlugin.install).toBe('function');
  });
});
