import { useToggle } from './useToggle';
import { useIntersectionObserver } from './useIntersectionObserver';
import { IntersectionPresets } from '../constants';
import { isString } from '../utils';
import { type TemplateRef, ref, onMounted } from 'vue';

export interface UseLoadImageOptions extends Pick<IntersectionObserverInit, 'rootMargin' | 'threshold'>{
  enableNativeLazyLoading?: boolean;
  immediate?: boolean;
}

export type UseLoadImageSource =
  | string
  | { src: string; srcset?: string; sizes?: string };

export function useLoadImage (
  element: TemplateRef<Element>,
  source: UseLoadImageSource,
  options: UseLoadImageOptions = {}
) {
  const {
    rootMargin = IntersectionPresets.LAZY_IMAGE.rootMargin,
    threshold = IntersectionPresets.LAZY_IMAGE.threshold,
    enableNativeLazyLoading = true,
    immediate = false
  } = options;

  const { stop } = useIntersectionObserver(element, intersectionCallback, {
    rootMargin,
    threshold,
  });

  const [isLoaded, setIsLoaded] = useToggle();
  const [hasError, setHasErrors] = useToggle();
  const imageSrc = ref('');
  const imageSrcset = ref('');
  const imageSizes = ref('');

  const normalizedSource = isString(source)
    ? { src: source }
    : source;

  function loadImage () {
    if (isLoaded.value || hasError.value) {
      return;
    }

    const img = new Image();

    img.src = normalizedSource.src;

    if (normalizedSource.srcset) {
      img.srcset = normalizedSource.srcset;
    }

    if (normalizedSource.sizes) {
      img.sizes = normalizedSource.sizes;
    }

    img.onload = () => {
      imageSrc.value = normalizedSource.src;
      imageSrcset.value = normalizedSource.srcset || '';
      imageSizes.value = normalizedSource.sizes || '';

      setIsLoaded(true);
      setHasErrors(false);
    };

    img.onerror = () => {
      setIsLoaded(false);
      setHasErrors(true);
    };
  }

  function intersectionCallback (entries: Array< IntersectionObserverEntry>) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isLoaded.value && !hasError.value) {
        loadImage();
      }
    });
  }

  onMounted(() => {
    // Если включена немедленная загрузка или браузер поддерживает native lazy loading
    if (immediate || (enableNativeLazyLoading && 'loading' in HTMLImageElement.prototype)) {
      loadImage();
      return;
    }
  });

  return {
    isLoaded,
    hasError,
    imageSrc,
    imageSrcset,
    imageSizes,
    loadImage,
    stop
  };
}
