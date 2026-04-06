import type { InputRootContext, InputModelValue } from '../types';
import type { MaybeNull } from '../../../types';
export interface UseInputBaseOptions {
    inputRootContext: MaybeNull<InputRootContext>;
}
export declare function useInputBase(options: UseInputBaseOptions): {
    modelValue: import("vue").WritableComputedRef<InputModelValue, InputModelValue>;
    listeners: {
        click(event: PointerEvent): void;
        dblclick(event: PointerEvent): void;
        mousedown(event: MouseEvent): void;
        mouseup(event: MouseEvent): void;
        mouseenter(event: MouseEvent): void;
        mouseleave(event: MouseEvent): void;
        mousemove(event: MouseEvent): void;
        mouseover(event: MouseEvent): void;
        mouseout(event: MouseEvent): void;
        contextmenu(event: Event): void;
        focusin(event: Event): void;
        focusout(event: Event): void;
        change(event: Event): void;
        blur(event: Event): void;
        focus(event: Event): void;
        keyup(event: KeyboardEvent): void;
        keydown(event: KeyboardEvent): void;
        keypress(event: KeyboardEvent): void;
        paste(event: ClipboardEvent): void;
        copy(event: ClipboardEvent): void;
        cut(event: ClipboardEvent): void;
    };
};
