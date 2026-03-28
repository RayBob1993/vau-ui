import { describe, expect, it } from 'vitest';
import { AlertPlugin } from '../plugin';

describe('AlertPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(AlertPlugin.install).toBeDefined();
    expect(typeof AlertPlugin.install).toBe('function');
  });
});
