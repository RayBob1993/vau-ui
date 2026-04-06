import { type TemplateRef } from 'vue';
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
    isLoaded: import("vue").Ref<boolean, boolean>;
    hasError: import("vue").Ref<boolean, boolean>;
    imageSrc: import("vue").Ref<string, string>;
    imageSrcset: import("vue").Ref<string, string>;
    imageSizes: import("vue").Ref<string, string>;
    loadImage: () => void;
    stop: () => void;
};
