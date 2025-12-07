import { describe, expect, it } from 'vitest';
import { ButtonGroupPlugin } from '../plugin';

describe('ButtonGroupPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(ButtonGroupPlugin.install).toBeDefined();
    expect(typeof ButtonGroupPlugin.install).toBe('function');
  });
});
