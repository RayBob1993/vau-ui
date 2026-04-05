import { SizeProp, ThemeProp } from '../../../core/index.ts';
import { VNode } from 'vue';
/**
 * Интерфейс свойств компонента VConfirm
 * @interface IVConfirmProps
 */
export type IVConfirmProps = {
    title?: string;
    message?: string | VNode;
    useHtml?: boolean;
    confirmText?: string;
    cancelText?: string;
} & Partial<ThemeProp> & Partial<SizeProp>;
/**
 * Интерфейс событий компонента VConfirm
 * @interface IVConfirmEmits
 */
export interface IVConfirmEmits {
    success: [];
    cancel: [];
    close: [];
}
