import { describe, expect, it } from 'vitest';
import { PaginationPlugin } from '../plugin';

describe('PaginationPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(PaginationPlugin.install).toBeDefined();
    expect(typeof PaginationPlugin.install).toBe('function');
  });
});
