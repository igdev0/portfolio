import {fluidRange} from 'polished';
import vars from '../styles/vars';
interface ResponsiveUnitProps {
  min: number;
  max: number;
  prop: string;
}

export function responsiveUnit({ min, max, prop, }: ResponsiveUnitProps) {
  const minRem =  max / vars.rootSize;
  const maxRem =  min / vars.rootSize;
  return fluidRange(
    { toSize: `${minRem}rem`, fromSize: `${maxRem}rem`, prop },
    `${vars.responsiveMin}rem`,
    `${vars.responsiveMax}rem`,
  );
}

export function delay(ms:number = 1000) {
  return new Promise((resolve:any) => {
    setTimeout(() => {
      resolve && resolve();
    }, ms)
  })
}
