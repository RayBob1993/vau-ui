import { LayoutPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('LayoutPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(LayoutPlugin.install).toBeDefined();
    expect(typeof LayoutPlugin.install).toBe('function');
  });
});
