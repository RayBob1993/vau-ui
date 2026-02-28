import type { InputRootContext, InputModelValue } from '../types';
import type { MaybeNull } from '../../../../types';
import { computed, toValue } from 'vue';

export interface UseInputBaseOptions {
  inputRootContext: MaybeNull<InputRootContext>;
}

export function useInputBase (options: UseInputBaseOptions) {
  const modelValue = computed<InputModelValue>({
    get: () => toValue(options.inputRootContext?.modelValue),
    set (value: InputModelValue) {
      if (!options.inputRootContext) {
        return;
      }

      options.inputRootContext.setModelValue(value);
    }
  });

  const listeners = {
    click (event: PointerEvent) {
      options.inputRootContext?.emit('click', event);
    },
    dblclick (event: PointerEvent) {
      options.inputRootContext?.emit('dblclick', event);
    },
    mousedown (event: MouseEvent) {
      options.inputRootContext?.emit('mousedown', event);
    },
    mouseup (event: MouseEvent) {
      options.inputRootContext?.emit('mouseup', event);
    },
    mouseenter (event: MouseEvent) {
      options.inputRootContext?.emit('mouseenter', event);
    },
    mouseleave (event: MouseEvent) {
      options.inputRootContext?.emit('mouseleave', event);
    },
    mousemove (event: MouseEvent) {
      options.inputRootContext?.emit('mousemove', event);
    },
    mouseover (event: MouseEvent) {
      options.inputRootContext?.emit('mouseover', event);
    },
    mouseout (event: MouseEvent) {
      options.inputRootContext?.emit('mouseout', event);
    },
    contextmenu (event: Event) {
      options.inputRootContext?.emit('contextmenu', event);
    },
    focusin (event: Event) {
      options.inputRootContext?.setFocus(true);
      options.inputRootContext?.emit('focusin', event);
    },
    focusout (event: Event) {
      options.inputRootContext?.setFocus(false);
      options.inputRootContext?.emit('focusout', event);
    },
    change (event: Event) {
      options.inputRootContext?.emit('change', event);
    },
    blur (event: Event)  {
      options.inputRootContext?.emit('blur', event);
    },
    focus (event: Event)  {
      options.inputRootContext?.emit('focus', event);
    },
    keyup (event: KeyboardEvent)  {
      options.inputRootContext?.emit('keyup', event);
    },
    keydown (event: KeyboardEvent)  {
      options.inputRootContext?.emit('keydown', event);
    },
    keypress (event: KeyboardEvent)  {
      options.inputRootContext?.emit('keypress', event);
    },
    paste (event: ClipboardEvent)  {
      options.inputRootContext?.emit('paste', event);
    },
    copy (event: ClipboardEvent)  {
      options.inputRootContext?.emit('copy', event);
    },
    cut (event: ClipboardEvent)  {
      options.inputRootContext?.emit('cut', event);
    },
  };

  return {
    modelValue,
    listeners
  };
}
