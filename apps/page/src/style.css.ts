import {createContainer, style} from '@vanilla-extract/css';

export const base = style({backgroundColor: "darkred"});

export const composed = style([base, {border: "2px solid blue"}]);


export const mainContainer = createContainer("main");

export const main = style({
  containerName: mainContainer,
  containerType: 'inline-size'
})

export const navigation = style({
  '@container': {
    [`${mainContainer} (min-width: 400px)`]: {
      display: 'flex',
      backgroundColor: "rebeccapurple"
    }
  }
})