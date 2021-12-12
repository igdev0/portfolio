import colors from "./colors";

export type Weights = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
export type GridTemplate = 'default';

export type VarsConfig = {
  rootSize: number
  responsiveMin: number
  responsiveMax: number
  colors: {
    [key: string]: string;
  },
  font: {
    [key: string]: string;
  },
}
