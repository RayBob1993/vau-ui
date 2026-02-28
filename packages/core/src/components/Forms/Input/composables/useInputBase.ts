import type { InputContext, InputModelValue } from '../types';
import type { MaybeNull } from '../../../../types';
import { computed } from 'vue';

export interface IUseInputBaseOptions {
  context: MaybeNull<InputContext>;
}

export function useInputBase (options: IUseInputBaseOptions) {
  const modelValue = computed<InputModelValue>({
    get: () => options.context?.modelValue.value,
    set (value: InputModelValue) {
      if (!options.context) {
        return;
      }

      options.context.modelValue.value = value;
    }
  });

  const listeners = {
    click (event: PointerEvent) {
      options.context?.emit('click', event);
    },
    dblclick (event: PointerEvent) {
      options.context?.emit('dblclick', event);
    },
    mousedown (event: MouseEvent) {
      options.context?.emit('mousedown', event);
    },
    mouseup (event: MouseEvent) {
      options.context?.emit('mouseup', event);
    },
    mouseenter (event: MouseEvent) {
      options.context?.emit('mouseenter', event);
    },
    mouseleave (event: MouseEvent) {
      options.context?.emit('mouseleave', event);
    },
    mousemove (event: MouseEvent) {
      options.context?.emit('mousemove', event);
    },
    mouseover (event: MouseEvent) {
      options.context?.emit('mouseover', event);
    },
    mouseout (event: MouseEvent) {
      options.context?.emit('mouseout', event);
    },
    contextmenu (event: Event) {
      options.context?.emit('contextmenu', event);
    },
    focusin (event: Event) {
      options.context?.setFocus(true);
      options.context?.emit('focusin', event);
    },
    focusout (event: Event) {
      options.context?.setFocus(false);
      options.context?.emit('focusout', event);
    },
    change (event: Event) {
      options.context?.emit('change', event);
    },
    blur (event: Event)  {
      options.context?.emit('blur', event);
    },
    focus (event: Event)  {
      options.context?.emit('focus', event);
    },
    keyup (event: KeyboardEvent)  {
      options.context?.emit('keyup', event);
    },
    keydown (event: KeyboardEvent)  {
      options.context?.emit('keydown', event);
    },
    keypress (event: KeyboardEvent)  {
      options.context?.emit('keypress', event);
    },
    paste (event: ClipboardEvent)  {
      options.context?.emit('paste', event);
    },
    copy (event: ClipboardEvent)  {
      options.context?.emit('copy', event);
    },
    cut (event: ClipboardEvent)  {
      options.context?.emit('cut', event);
    },
  };

  return {
    modelValue,
    listeners
  };
}
