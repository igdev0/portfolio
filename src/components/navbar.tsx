import {NavbarStyled} from './navbar.styled.ts';
import {MotionValue} from 'framer-motion';
import {AppRightCTAStyled} from './app.styled.ts';
import {SECTIONS} from '../vars/content.ts';

export default function Navbar({hidden}: { hidden: MotionValue }) {
  return (
      <NavbarStyled style={{y: hidden}}>
        {
          SECTIONS.map((item) => (
              <AppRightCTAStyled>
                {item.text}
              </AppRightCTAStyled>
          ))
        }
      </NavbarStyled>
  );
}