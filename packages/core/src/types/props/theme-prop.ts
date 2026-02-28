import type { ValueOf } from '../value-of';
import { Themes } from '../../constants';

export type ITheme = ValueOf<typeof Themes>;

export interface IThemeProp {
  theme: ITheme;
}
