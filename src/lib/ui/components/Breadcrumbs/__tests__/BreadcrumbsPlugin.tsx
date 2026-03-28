import { describe, expect, it } from 'vitest';
import { BreadcrumbsPlugin } from '../plugin';

describe('BreadcrumbsPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(BreadcrumbsPlugin.install).toBeDefined();
    expect(typeof BreadcrumbsPlugin.install).toBe('function');
  });
});
