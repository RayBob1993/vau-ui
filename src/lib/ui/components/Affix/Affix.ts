import { isNumber, isUndefined } from '@vau/core';

enum AffixedType {
  STATIC,
  VIEWPORT_TOP,
  VIEWPORT_BOTTOM,
  CONTAINER_BOTTOM,
  VIEWPORT_UNBOTTOM
}

enum AffixDirection {
  UP,
  DOWN
}

type AffixStyleElement = Partial<Record<keyof CSSStyleDeclaration, string | number>>;

interface AffixStyle {
  outer: AffixStyleElement;
  inner: AffixStyleElement;
}

interface AffixUserOptions {
  offsetTop?: number;
  offsetBottom?: number;
  innerWrapper: HTMLElement;
  container: HTMLElement;
  affixClass?: string;
}

interface AffixOptions {
  offsetTop: number;
  offsetBottom: number;
  innerWrapper: HTMLElement;
  container: HTMLElement;
  affixClass: string;
}

interface AffixDimensions {
  translateY: number;
  maxTranslateY: number;
  offsetTop: number;
  lastOffsetTop: number;
  offsetBottom: number;
  lastOffsetBottom: number;
  sidebarHeight: number;
  sidebarWidth: number;
  containerTop: number;
  containerHeight: number;
  viewportHeight: number;
  viewportTop: number;
  lastViewportTop: number;
  viewportBottom: number;
  containerBottom: number;
  sidebarLeft: number;
  viewportLeft: number;
}

const DEFAULTS = {
  offsetTop: 0,
  offsetBottom: 0,
  affixClass: 'is-affixed'
};

export class Affix {
  #options: AffixOptions;
  #sidebar: HTMLElement;
  #sidebarInner: HTMLElement;
  #container: HTMLElement;
  #affixedType: AffixedType;
  #direction: AffixDirection;
  #initialized: boolean;
  #reStyle: boolean;
  #running: boolean;
  #dimensions: AffixDimensions;
  #resizeObserverContainer: ResizeObserver | undefined;
  #resizeObserverSidebarInner: ResizeObserver | undefined;

  constructor (sidebar: HTMLElement, options: AffixUserOptions) {
    this.#options = this.#getOptions(options);
    this.#sidebar = sidebar;
    this.#sidebarInner = options.innerWrapper;
    this.#container = options.container;

    this.#affixedType = AffixedType.STATIC;
    this.#direction = AffixDirection.DOWN;

    this.#initialized = false;
    this.#reStyle = false;
    this.#running = false;

    this.#resizeObserverContainer = undefined;
    this.#resizeObserverSidebarInner = undefined;

    this.#dimensions = {
      translateY: 0,
      maxTranslateY: 0,
      offsetTop: 0,
      lastOffsetTop: 0,
      offsetBottom: 0,
      lastOffsetBottom: 0,
      sidebarHeight: 0,
      sidebarWidth: 0,
      containerTop: 0,
      containerHeight: 0,
      viewportHeight: 0,
      viewportTop: 0,
      lastViewportTop: 0,
      viewportBottom: 0,
      containerBottom: 0,
      sidebarLeft: 0,
      viewportLeft: 0
    };

    this.#initialize();
  }

  #getOptions (userOptions: AffixUserOptions): AffixOptions {
    return {
      ...DEFAULTS,
      ...userOptions
    };
  }

  #initialize () {
    this.#sidebarInner = this.#options.innerWrapper;
    this.#container = this.#options.container;

    this.#calcDimensions();
    this.#affixPosition();
    this.#bindEvents();

    this.#initialized = true;
  }

  #bindEvents () {
    window.addEventListener('resize', event => this.#handleEvent(event), { passive: true, capture: false });
    window.addEventListener('scroll', event => this.#handleEvent(event), { passive: true, capture: false });

    this.#resizeObserverContainer = this.#createResizeObserver(this.#container, () => {
      this.updateSticky();
    });

    this.#resizeObserverSidebarInner = this.#createResizeObserver(this.#sidebarInner, () => {
      this.updateSticky();
    });
  }

  #createResizeObserver (element: HTMLElement, callback: ResizeObserverCallback): ResizeObserver {
    const observer = new ResizeObserver(entries => {
      if (!entries.length) {
        return;
      }

      entries.forEach(() => {
        callback(entries, observer);
      });
    });

    observer.observe(element);

    return observer;
  }

  #handleEvent (event: Event) {
    this.updateSticky(event);
  }

  #calcDimensions () {
    const dims = this.#dimensions;

    dims.containerTop = this.#container.offsetTop;
    dims.containerHeight = this.#container.clientHeight;
    dims.containerBottom = dims.containerTop + dims.containerHeight;

    dims.sidebarHeight = this.#sidebarInner.offsetHeight;
    dims.sidebarWidth = this.#sidebar.offsetWidth;

    dims.viewportHeight = window.innerHeight;

    dims.maxTranslateY = dims.containerHeight - dims.sidebarHeight;

    this.#calcDimensionsWithScroll();
  }

  #calcDimensionsWithScroll () {
    const dims = this.#dimensions;

    dims.sidebarLeft = this.#sidebar.offsetLeft;

    dims.viewportTop = document.documentElement.scrollTop || document.body.scrollTop;
    dims.viewportBottom = dims.viewportTop + dims.viewportHeight;
    dims.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

    dims.offsetTop = this.#options.offsetTop || 0;
    dims.offsetBottom = this.#options.offsetBottom || 0;

    if (AffixedType.VIEWPORT_TOP === this.#affixedType) {
      if (dims.offsetTop < dims.lastOffsetTop) {
        dims.translateY += dims.lastOffsetTop - dims.offsetTop;
        this.#reStyle = true;
      }
    } else if (AffixedType.VIEWPORT_BOTTOM === this.#affixedType) {
      if (dims.offsetBottom < dims.lastOffsetBottom) {
        dims.translateY += dims.lastOffsetBottom - dims.offsetBottom;
        this.#reStyle = true;
      }
    }

    dims.lastOffsetTop = dims.offsetTop;
    dims.lastOffsetBottom = dims.offsetBottom;
  }

  #isSidebarFitsViewport (): boolean {
    const dims = this.#dimensions;
    const offset = dims.lastOffsetTop;

    return this.#dimensions.sidebarHeight + offset < this.#dimensions.viewportHeight;
  }

  #observeScrollDir () {
    const { lastViewportTop, viewportTop } = this.#dimensions;

    if (lastViewportTop === viewportTop) {
      return;
    }

    const furthest = AffixDirection.DOWN === this.#direction
      ? Math.min
      : Math.max;

    if (viewportTop === furthest(viewportTop, lastViewportTop)) {
      this.#direction = AffixDirection.DOWN === this.#direction
        ? AffixDirection.UP
        : AffixDirection.DOWN;
    }
  }

  #getAffixType (): AffixedType {
    this.#calcDimensionsWithScroll();

    const dims = this.#dimensions;
    const colliderTop = dims.viewportTop + dims.offsetTop;
    let affixType: AffixedType;

    if (colliderTop <= dims.containerTop || dims.containerHeight <= dims.sidebarHeight) {
      dims.translateY = 0;
      affixType = AffixedType.STATIC;
    } else {
      affixType = AffixDirection.UP === this.#direction
        ? this.#getAffixTypeScrollingUp()
        : this.#getAffixTypeScrollingDown();
    }

    const translateYMax = Math.max(0, dims.translateY);
    const translateYMin = Math.min(dims.containerHeight, translateYMax);

    dims.translateY = Math.round(translateYMin);
    dims.lastViewportTop = dims.viewportTop;

    return affixType;
  }

  #getAffixTypeScrollingDown () {
    const dims = this.#dimensions;
    const sidebarBottom = dims.sidebarHeight + dims.containerTop;
    const colliderTop = dims.viewportTop + dims.offsetTop;
    const colliderBottom = dims.viewportBottom - dims.offsetBottom;
    let affixType = this.#affixedType;

    if (this.#isSidebarFitsViewport()) {
      if (dims.sidebarHeight + colliderTop >= dims.containerBottom) {
        dims.translateY = dims.containerBottom - sidebarBottom;
        affixType = AffixedType.CONTAINER_BOTTOM;
      } else if (colliderTop >= dims.containerTop) {
        dims.translateY = colliderTop - dims.containerTop;
        affixType = AffixedType.VIEWPORT_TOP;
      }
    } else {
      if (dims.containerBottom <= colliderBottom) {
        dims.translateY = dims.containerBottom - sidebarBottom;
        affixType = AffixedType.CONTAINER_BOTTOM;
      } else if (sidebarBottom + dims.translateY <= colliderBottom) {
        dims.translateY = colliderBottom - sidebarBottom;
        affixType = AffixedType.VIEWPORT_BOTTOM;
      } else if (dims.containerTop + dims.translateY <= colliderTop && (0 !== dims.translateY && dims.maxTranslateY !== dims.translateY)) {
        affixType = AffixedType.VIEWPORT_UNBOTTOM;
      }
    }

    return affixType;
  }

  #getAffixTypeScrollingUp () {
    const dims = this.#dimensions;
    const sidebarBottom = dims.sidebarHeight + dims.containerTop;
    const colliderTop = dims.viewportTop + dims.offsetTop;
    const colliderBottom = dims.viewportBottom - dims.offsetBottom;
    let affixType = this.#affixedType;

    if (colliderTop <= dims.translateY + dims.containerTop) {
      dims.translateY = colliderTop - dims.containerTop;
      affixType = AffixedType.VIEWPORT_TOP;
    } else if (dims.containerBottom <= colliderBottom) {
      dims.translateY = dims.containerBottom - sidebarBottom;
      affixType = AffixedType.CONTAINER_BOTTOM;
    } else if (!this.#isSidebarFitsViewport()) {
      if (dims.containerTop <= colliderTop && (0 !== dims.translateY && dims.maxTranslateY !== dims.translateY)) {
        affixType = AffixedType.VIEWPORT_UNBOTTOM;
      }
    }

    return affixType;
  }

  #getStyle (affixType: AffixedType) {
    const style: AffixStyle = {
      inner: {},
      outer: {}
    };

    const dims = this.#dimensions;

    switch (affixType) {
      case AffixedType.VIEWPORT_TOP:
        style.inner = {
          position: 'fixed',
          top: dims.offsetTop,
          left: dims.sidebarLeft - dims.viewportLeft,
          width: dims.sidebarWidth
        };
        break;
      case AffixedType.VIEWPORT_BOTTOM:
        style.inner = {
          position: 'fixed',
          top: 'auto',
          left: dims.sidebarLeft,
          bottom: dims.offsetBottom,
          width: dims.sidebarWidth
        };
        break;
      case AffixedType.CONTAINER_BOTTOM:
      case AffixedType.VIEWPORT_UNBOTTOM: {
        const translate = this.#getTranslate(0, dims.translateY + 'px');

        if (translate) {
          style.inner = {
            transform: translate
          };
        } else {
          style.inner = {
            position: 'absolute',
            top: dims.translateY,
            width: dims.sidebarWidth
          };
          break;
        }
      }
    }

    switch (affixType) {
      case AffixedType.VIEWPORT_TOP:
      case AffixedType.VIEWPORT_BOTTOM:
      case AffixedType.VIEWPORT_UNBOTTOM:
      case AffixedType.CONTAINER_BOTTOM:
        style.outer = {
          height: dims.sidebarHeight,
          position: 'relative'
        };
        break;
    }

    style.outer = Affix.extend({
      height: '',
      position: ''
    }, style.outer);

    style.inner = Affix.extend({
      position: 'relative',
      top: '',
      left: '',
      bottom: '',
      width: '',
      transform: ''
    }, style.inner);

    return style;
  }

  #affixPosition (force: boolean = false) {
    force = this.#reStyle || force;

    const affixType = this.#getAffixType();
    const style = this.#getStyle(affixType);

    function getUnitStyleValue (value: string | number | undefined): string {
      const unit = isNumber(value) ? 'px' : '';

      return `${value}${unit}`;
    }

    if ((this.#affixedType !== affixType || force)) {
      if (AffixedType.STATIC === affixType) {
        this.#sidebar.classList.remove(this.#options.affixClass);
      } else {
        this.#sidebar.classList.add(this.#options.affixClass);
      }

      for (const key in style.outer) {
        if (Object.hasOwn(style.outer, key)) {
          this.#sidebar.style[key] = getUnitStyleValue(style.outer[key]);
        }
      }

      for (const key in style.inner) {
        if (Object.hasOwn(style.inner, key)) {
          this.#sidebarInner.style[key] = getUnitStyleValue(style.inner[key]);
        }
      }
    } else {
      if (this.#initialized) {
        this.#sidebarInner.style.left = getUnitStyleValue(style.inner.left);
      }
    }

    this.#affixedType = affixType;
  }

  #getTranslate (y: string | number = 0, x: string | number = 0, z: string | number = 0) {
    return `translate3d(${y}, ${x}, ${z})`;
  }

  updateSticky (event?: Event) {
    if (this.#running) {
      return;
    }

    this.#running = true;

    (eventType => {
      requestAnimationFrame(() => {
        switch (eventType) {
          case 'scroll':
            this.#calcDimensionsWithScroll();
            this.#observeScrollDir();
            this.#affixPosition();
            break;

          case 'resize':
          default:
            this.#calcDimensions();
            this.#affixPosition(true);
            break;
        }

        this.#running = false;
      });
    })(event?.type);
  }

  destroy () {
    window.removeEventListener('resize', event => this.#handleEvent(event), { capture: false });
    window.removeEventListener('scroll', event => this.#handleEvent(event), { capture: false });

    this.#resizeObserverSidebarInner?.disconnect();
    this.#resizeObserverContainer?.disconnect();

    this.#resizeObserverSidebarInner = undefined;
    this.#resizeObserverContainer = undefined;

    this.#sidebar.classList.remove(this.#options.affixClass);

    this.#sidebar.removeAttribute('style');
    this.#sidebarInner.removeAttribute('style');
  }

  static extend (defaults: AffixStyleElement, options: AffixStyleElement): AffixStyleElement {
    const results: AffixStyleElement = {};

    for (const key in defaults) {
      if (!isUndefined(options[key])) {
        results[key] = options[key];
      } else {
        results[key] = defaults[key];
      }
    }

    return results;
  }
}
