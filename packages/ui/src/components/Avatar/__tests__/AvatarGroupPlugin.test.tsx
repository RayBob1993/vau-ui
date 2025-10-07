import { describe, expect, it } from 'vitest';
import { AvatarGroupPlugin } from '../plugin';

describe('AvatarGroupPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(AvatarGroupPlugin.install).toBeDefined();
    expect(typeof AvatarGroupPlugin.install).toBe('function');
  });
});
