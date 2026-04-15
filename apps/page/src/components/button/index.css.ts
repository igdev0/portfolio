import {style} from '@vanilla-extract/css';

export const base = style({
  padding: '.7rem',
  borderRadius: "6px",
  color: 'white',
  fontWeight: 'bold',
  background: "#333",
  cursor: 'pointer',
  ":hover": {
    backgroundColor: 'red',
  }
})