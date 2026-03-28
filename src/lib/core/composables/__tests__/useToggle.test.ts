import { useToggle } from '../useToggle';
import { describe, it, expect } from 'vitest';

describe('useToggle', () => {
  it('следует инициализировать со значением по умолчанию false', () => {
    const [state] = useToggle();

    expect(state.value).toBe(false);
  });

  it('следует инициализировать с предоставленным значением', () => {
    const [state] = useToggle(true);

    expect(state.value).toBe(true);
  });

  it('следует правильно переключать состояние', () => {
    const [state, , toggleState] = useToggle(false);

    toggleState();
    expect(state.value).toBe(true);
    toggleState();
    expect(state.value).toBe(false);
  });

  it('следует правильно установить состояние', () => {
    const [state, setState] = useToggle(false);

    setState(true);
    expect(state.value).toBe(true);
    setState(false);
    expect(state.value).toBe(false);
  });
});
