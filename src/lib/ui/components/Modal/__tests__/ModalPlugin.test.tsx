import { ModalPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('ModalPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(ModalPlugin.install).toBeDefined();
    expect(typeof ModalPlugin.install).toBe('function');
  });
});
