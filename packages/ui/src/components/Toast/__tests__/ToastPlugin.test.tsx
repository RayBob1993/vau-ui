import { describe, expect, it } from 'vitest';
import { ToastPlugin } from '../plugin';

describe('ToastPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(ToastPlugin.install).toBeDefined();
    expect(typeof ToastPlugin.install).toBe('function');
  });
});
