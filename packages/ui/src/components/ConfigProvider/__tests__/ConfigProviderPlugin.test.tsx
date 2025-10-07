import { describe, expect, it } from 'vitest';
import { ConfigProviderPlugin } from '../plugin';

describe('ConfigProviderPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(ConfigProviderPlugin.install).toBeDefined();
    expect(typeof ConfigProviderPlugin.install).toBe('function');
  });
});
