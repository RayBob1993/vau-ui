import { useAccordionRootContext } from './useAccordionRootContext';
import { useAccordionItemContext } from './useAccordionItemContext';

export function useAccordionContext () {
  const AccordionRootContext = useAccordionRootContext();
  const AccordionItemContext = useAccordionItemContext();

  return {
    AccordionRootContext,
    AccordionItemContext
  };
}
