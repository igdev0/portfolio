import {createGlobalTheme, globalStyle,} from '@vanilla-extract/css';
import {resetLayer, utilitiesLayer} from '../config/layers.css.ts';
import "../config/colors.css.ts";
import {colorsTokens} from '../config/colors.css.ts';

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