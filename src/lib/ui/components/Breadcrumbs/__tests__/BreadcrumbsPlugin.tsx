import { BreadcrumbsPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('BreadcrumbsPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(BreadcrumbsPlugin.install).toBeDefined();
    expect(typeof BreadcrumbsPlugin.install).toBe('function');
  });
});
