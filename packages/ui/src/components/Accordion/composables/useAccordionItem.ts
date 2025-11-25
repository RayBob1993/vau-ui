import type { IVAccordionItemProps, IVAccordionModelValue } from '../types';
import { useAccordionContext } from '../context';
import { computed } from 'vue';

export function useAccordionItem (props: IVAccordionItemProps) {
  const Accordion = useAccordionContext();

  const modelValue = computed<IVAccordionModelValue>(() => Accordion?.modelValue.value);
  const isMultiple = computed<boolean>(() => Boolean(Accordion?.props.multiple));

  const isActive = computed<boolean>(() => {
    return isMultiple.value && Array.isArray(modelValue.value)
      ? modelValue.value.includes(props.value)
      : modelValue.value === props.value;
  });

  const tabIndex = computed<number>(() => props.disabled ? -1 : 0);

  function handleToggle () {
    const changeValue = modelValue.value === props.value ? undefined : props.value;

    Accordion?.handleChange(changeValue);
  }

  return {
    isActive,
    tabIndex,
    handleToggle
  };
}
