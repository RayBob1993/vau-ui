import { describe, expect, it } from 'vitest';
import { ContainerPlugin } from '../plugin';

describe('ContainerPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(ContainerPlugin.install).toBeDefined();
    expect(typeof ContainerPlugin.install).toBe('function');
  });
});
