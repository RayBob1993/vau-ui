import { pick } from '../pick';
import { describe, it, expect } from 'vitest';

describe('pick', () => {
  it('Проверка тестовых данных', () => {
    const testObject = {
      prop1: 'value1',
      prop2: 'value2',
      prop3: 'value3',
      prop4: 'value4'
    };

    expect(pick(testObject, ['prop3', 'prop4'])).toEqual({
      prop3: 'value3',
      prop4: 'value4'
    });
  });
});
