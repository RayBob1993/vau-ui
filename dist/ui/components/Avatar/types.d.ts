import { SizeProp, ThemeProp } from '../../../core/index.ts';
/**
 * Интерфейс свойств компонента VAvatar
 * @interface IVAvatarProps
 */
export type IVAvatarProps = {
    src?: string;
    fallback?: string;
    circle?: boolean;
    label?: string;
} & Partial<SizeProp> & Partial<ThemeProp>;
