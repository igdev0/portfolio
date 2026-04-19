import {globalStyle} from '@vanilla-extract/css';
import {resetLayer} from './global/layers.css.ts';

globalStyle("#root", {
  "@layer": {
    [resetLayer]: {
      width: "100%",
    }
  }
})