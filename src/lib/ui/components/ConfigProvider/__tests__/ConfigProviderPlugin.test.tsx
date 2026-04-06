import { ConfigProviderPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('ConfigProviderPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(ConfigProviderPlugin.install).toBeDefined();
    expect(typeof ConfigProviderPlugin.install).toBe('function');
  });
});
