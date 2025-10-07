import { describe, expect, it } from 'vitest';
import { TooltipPlugin } from '../plugin';

describe('TextPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(TooltipPlugin.install).toBeDefined();
    expect(typeof TooltipPlugin.install).toBe('function');
  });
});
