import { ButtonPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('ButtonPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(ButtonPlugin.install).toBeDefined();
    expect(typeof ButtonPlugin.install).toBe('function');
  });
});
