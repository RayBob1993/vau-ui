import { useToggle } from '@vau/core';

interface IUseInplaceOptions {
  onOpen?: VoidFunction;
  onClose?: VoidFunction;
}

export function useInplace (options?: IUseInplaceOptions) {
  const [isVisible, setVisible] = useToggle();

  function handleOpen () {
    setVisible(true);
    options?.onOpen?.();
  }

  function handleClose () {
    setVisible(false);
    options?.onClose?.();
  }

  return {
    isVisible,
    handleOpen,
    handleClose
  };
}
