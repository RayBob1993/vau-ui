import { omit } from '../omit';
import { describe, it, expect } from 'vitest';

describe('omit', () => {
  it('Проверка тестовых данных', () => {
    const testObject = {
      prop1: 'value1',
      prop2: 'value2',
      prop3: 'value3',
      prop4: 'value4'
    };

    expect(omit(testObject, ['prop3', 'prop4'])).toEqual({
      prop1: 'value1',
      prop2: 'value2'
    });
  });
});
