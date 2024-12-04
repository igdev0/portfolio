import {NavbarItemStyled, NavbarStyled} from './navbar.styled.ts';
import {SECTIONS} from '../../vars/content.ts';

export default function Navbar() {
  return (
      <NavbarStyled>
        {
          SECTIONS.map((item) => (
              <NavbarItemStyled href={item.to}>
                {item.text}
              </NavbarItemStyled>
          ))
        }
      </NavbarStyled>
  );
}