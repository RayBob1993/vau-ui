import { describe, expect, it } from 'vitest';
import { ModalPlugin } from '../plugin';

describe('ModalPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(ModalPlugin.install).toBeDefined();
    expect(typeof ModalPlugin.install).toBe('function');
  });
});
