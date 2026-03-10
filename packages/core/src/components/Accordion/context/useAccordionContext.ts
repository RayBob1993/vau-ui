import { useAccordionRootContext } from './useAccordionRootContext';
import { useAccordionItemContext } from './useAccordionItemContext';

export function useAccordionContext () {
  const accordionRootContext = useAccordionRootContext();
  const accordionItemContext = useAccordionItemContext();

  return {
    accordionRootContext,
    accordionItemContext
  };
}
