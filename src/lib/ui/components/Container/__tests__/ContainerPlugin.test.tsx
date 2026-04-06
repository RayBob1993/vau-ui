import { ContainerPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('ContainerPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(ContainerPlugin.install).toBeDefined();
    expect(typeof ContainerPlugin.install).toBe('function');
  });
});
