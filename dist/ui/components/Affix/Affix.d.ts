type AffixStyleElement = Partial<Record<keyof CSSStyleDeclaration, string | number>>;
interface AffixUserOptions {
    offsetTop?: number;
    offsetBottom?: number;
    innerWrapper: HTMLElement;
    container: HTMLElement;
    affixClass?: string;
}
export declare class Affix {
    #private;
    constructor(sidebar: HTMLElement, options: AffixUserOptions);
    updateSticky(event?: Event): void;
    destroy(): void;
    static extend(defaults: AffixStyleElement, options: AffixStyleElement): AffixStyleElement;
}
export {};
