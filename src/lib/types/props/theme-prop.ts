import type { ValueOf } from '../utils';
import { Themes } from '../../constants';

export type ITheme = ValueOf<typeof Themes>;

export interface IThemeProp {
  theme: ITheme;
}
