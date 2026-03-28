import { describe, expect, it } from 'vitest';
import { AvatarPlugin } from '../plugin';

describe('AvatarPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(AvatarPlugin.install).toBeDefined();
    expect(typeof AvatarPlugin.install).toBe('function');
  });
});
