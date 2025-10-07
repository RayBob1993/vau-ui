import { describe, expect, it } from 'vitest';
import { ProgressPlugin } from '../plugin';

describe('ProgressPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(ProgressPlugin.install).toBeDefined();
    expect(typeof ProgressPlugin.install).toBe('function');
  });
});
