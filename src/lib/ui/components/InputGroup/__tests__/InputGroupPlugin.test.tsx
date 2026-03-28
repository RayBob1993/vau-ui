import { describe, expect, it } from 'vitest';
import { InputGroupPlugin } from '../plugin';

describe('InputGroupPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(InputGroupPlugin.install).toBeDefined();
    expect(typeof InputGroupPlugin.install).toBe('function');
  });
});
