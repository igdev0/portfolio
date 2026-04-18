import {layer} from '@vanilla-extract/css';

export const componentsL = layer("components");
export const baseL = layer({parent: componentsL},"base");
