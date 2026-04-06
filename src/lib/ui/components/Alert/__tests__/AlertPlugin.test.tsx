import { AlertPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('AlertPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(AlertPlugin.install).toBeDefined();
    expect(typeof AlertPlugin.install).toBe('function');
  });
});
