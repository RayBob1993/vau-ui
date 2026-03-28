import { delay } from '../delay';
import { describe, it, expect } from 'vitest';

describe('delay', () => {
  it('Проверка задержки выполнения', async () => {
    const start = Date.now();
    const delayTime = 100;

    await delay(delayTime);

    const end = Date.now();
    const elapsed = end - start;

    expect(elapsed).toBeGreaterThanOrEqual(delayTime);
    expect(elapsed).toBeLessThanOrEqual(delayTime + 20);
  });
});
