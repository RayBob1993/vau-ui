import { AvatarPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('AvatarPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(AvatarPlugin.install).toBeDefined();
    expect(typeof AvatarPlugin.install).toBe('function');
  });
});
