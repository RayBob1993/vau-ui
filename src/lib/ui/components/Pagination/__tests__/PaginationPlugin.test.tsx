import { PaginationPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('PaginationPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(PaginationPlugin.install).toBeDefined();
    expect(typeof PaginationPlugin.install).toBe('function');
  });
});
