import { ProgressPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('ProgressPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(ProgressPlugin.install).toBeDefined();
    expect(typeof ProgressPlugin.install).toBe('function');
  });
});
