import type { ValueOf } from '../value-of';
import { Themes } from '../../constants';
export type Theme = ValueOf<typeof Themes>;
export interface ThemeProp {
    theme: Theme;
}
