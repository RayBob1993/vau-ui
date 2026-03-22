import { Component } from 'vue';
export interface PrimitiveProp {
    asChild: boolean;
    as: keyof HTMLElementTagNameMap | Component;
}
