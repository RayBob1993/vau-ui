import { CountdownPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('CountdownPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(CountdownPlugin.install).toBeDefined();
    expect(typeof CountdownPlugin.install).toBe('function');
  });
});
