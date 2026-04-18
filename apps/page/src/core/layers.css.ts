import {layer} from '@vanilla-extract/css';

export const utilsL = layer("utils");
export const resetL = layer("reset");
export const componentsL = layer({parent: utilsL}, "components");
