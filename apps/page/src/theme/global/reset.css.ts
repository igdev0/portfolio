import {globalStyle} from '@vanilla-extract/css';
import {layers} from './layers.css.ts';

globalStyle("html, body", {
  "@layer": {
    [layers.reset]: {
      margin: 0,
      padding: 0,
      fontFamily: "sans-serif"
    }
  }
});

globalStyle("#app", {
  "@layer": {
    [layers.reset]: {
      width: "100%",
    }
  }
});

globalStyle("*", {
  "@layer": {
    [layers.reset]: {
      boxSizing: "border-box"
    }
  }
});