import { describe, expect, it } from 'vitest';
import { DropdownPlugin } from '../plugin';

describe('DropdownPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(DropdownPlugin.install).toBeDefined();
    expect(typeof DropdownPlugin.install).toBe('function');
  });
});
