import { AvatarGroupPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('AvatarGroupPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(AvatarGroupPlugin.install).toBeDefined();
    expect(typeof AvatarGroupPlugin.install).toBe('function');
  });
});
