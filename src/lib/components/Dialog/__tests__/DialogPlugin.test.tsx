import { describe, expect, it } from 'vitest';
import { DialogPlugin } from '../plugin';

describe('DialogPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(DialogPlugin.install).toBeDefined();
    expect(typeof DialogPlugin.install).toBe('function');
  });
});
