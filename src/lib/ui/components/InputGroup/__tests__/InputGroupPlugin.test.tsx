import { InputGroupPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('InputGroupPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(InputGroupPlugin.install).toBeDefined();
    expect(typeof InputGroupPlugin.install).toBe('function');
  });
});
