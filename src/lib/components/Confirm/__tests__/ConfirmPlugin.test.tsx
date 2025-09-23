import { describe, expect, it } from 'vitest';
import { ConfirmPlugin } from '../plugin';

describe('ConfirmPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(ConfirmPlugin.install).toBeDefined();
    expect(typeof ConfirmPlugin.install).toBe('function');
  });
});
