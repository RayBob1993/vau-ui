export interface IVTabsProps {
  scrollable?: boolean;
}

export interface IVTabsEmits {
  (event: 'change'): void;
}

export interface IVTabSlots {
  default?: (props: {
    isActive: boolean;
  }) => never;
  title?: (props: {
    isActive: boolean;
  }) => never;
}

export interface IVTabsContext {
  props: IVTabsProps;
}
