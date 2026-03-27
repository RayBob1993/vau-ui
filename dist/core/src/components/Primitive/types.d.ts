import { Component } from 'vue';
export type PrimitiveProps = {
    asChild: boolean;
    as: keyof HTMLElementTagNameMap | Component;
};
