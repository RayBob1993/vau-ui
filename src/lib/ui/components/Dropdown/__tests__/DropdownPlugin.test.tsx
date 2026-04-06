import { DropdownPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('DropdownPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(DropdownPlugin.install).toBeDefined();
    expect(typeof DropdownPlugin.install).toBe('function');
  });
});
