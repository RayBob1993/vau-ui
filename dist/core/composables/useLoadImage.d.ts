import { TemplateRef, Ref } from 'vue';
export interface UseLoadImageOptions extends Pick<IntersectionObserverInit, 'rootMargin' | 'threshold'> {
    enableNativeLazyLoading?: boolean;
    immediate?: boolean;
}
export type UseLoadImageSource = string | {
    src: string;
    srcset?: string;
    sizes?: string;
};
export declare function useLoadImage(element: TemplateRef<Element>, source: UseLoadImageSource, options?: UseLoadImageOptions): {
    isLoaded: Ref<boolean, boolean>;
    hasError: Ref<boolean, boolean>;
    imageSrc: Ref<string, string>;
    imageSrcset: Ref<string, string>;
    imageSizes: Ref<string, string>;
    loadImage: () => void;
    stop: () => void;
};
