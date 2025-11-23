export type IVLocaleTranslate = {
  [key: string]: string | Array<string> | IVLocaleTranslate;
};

export interface IVLocale {
  name: string;
  vau: IVLocaleTranslate;
}
