import { ButtonGroupPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('ButtonGroupPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(ButtonGroupPlugin.install).toBeDefined();
    expect(typeof ButtonGroupPlugin.install).toBe('function');
  });
});
