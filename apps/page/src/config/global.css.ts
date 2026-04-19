import {createGlobalTheme, globalStyle,} from '@vanilla-extract/css';
import {resetLayer, utilitiesLayer} from './layers.css.ts';
import "./colors.css.ts";
import {colorsTokens} from './colors.css.ts';

export const colors = createGlobalTheme(":root", {
  '@layer': utilitiesLayer,
  ...colorsTokens,
});


globalStyle("html, body", {
  "@layer": {
    [resetLayer]: {
      margin: 0,
      padding: 0
    }
  }
});


globalStyle("*", {
  "@layer": {
    [resetLayer]: {
      boxSizing: "border-box"
    }
  }
});

globalStyle("#root", {
  "@layer": {
    [resetLayer]: {
      width: "100%",
    }
  }
})