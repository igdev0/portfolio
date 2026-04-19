import {globalStyle} from '@vanilla-extract/css';
import {resetLayer} from './layers.css.ts';

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