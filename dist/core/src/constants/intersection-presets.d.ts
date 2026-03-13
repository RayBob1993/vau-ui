export declare const IntersectionPresets: Readonly<{
    LAZY_IMAGE: {
        threshold: number;
        rootMargin: string;
    };
    /** Для бесконечного скролла */
    INFINITE_SCROLL: {
        threshold: number;
        rootMargin: string;
    };
    /** Для отслеживания видимости 50% элемента */
    HALF_VISIBLE: {
        threshold: number;
    };
    /** Для точного определения полной видимости */
    FULL_VISIBLE: {
        threshold: number;
    };
    /** Для пошагового отслеживания видимости */
    STEPPED: {
        threshold: number[];
    };
}>;
