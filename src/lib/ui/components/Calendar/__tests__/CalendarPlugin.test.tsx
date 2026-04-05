import { CalendarPlugin } from '../plugin';
import { describe, expect, it } from 'vitest';

describe('CalendarPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(CalendarPlugin.install).toBeDefined();
    expect(typeof CalendarPlugin.install).toBe('function');
  });
});
