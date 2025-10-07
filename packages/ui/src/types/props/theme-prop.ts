import type { ValueOf } from '@vau/core';
import { Themes } from '../../constants';

export type ITheme = ValueOf<typeof Themes>;

export interface IThemeProp {
  theme: ITheme;
}
