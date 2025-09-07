export interface IVFormProps {
  disabled?: boolean;
  scrollToError?: boolean;
  scrollIntoViewOptions?: ScrollIntoViewOptions;
}

export interface IVFormSlots {
  default?: (props: {
    isValid: boolean;
  }) => void;
}

export interface IVFormContext {
  props: IVFormProps;
}
