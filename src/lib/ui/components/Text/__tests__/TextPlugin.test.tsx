import { describe, expect, it } from 'vitest';
import { TextPlugin } from '../plugin';

describe('TextPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(TextPlugin.install).toBeDefined();
    expect(typeof TextPlugin.install).toBe('function');
  });
});
