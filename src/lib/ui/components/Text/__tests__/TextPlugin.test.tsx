import { TextPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('TextPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(TextPlugin.install).toBeDefined();
    expect(typeof TextPlugin.install).toBe('function');
  });
});
