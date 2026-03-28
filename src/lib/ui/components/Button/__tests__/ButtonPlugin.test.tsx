import { describe, expect, it } from 'vitest';
import { ButtonPlugin } from '../plugin';

describe('ButtonPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(ButtonPlugin.install).toBeDefined();
    expect(typeof ButtonPlugin.install).toBe('function');
  });
});
