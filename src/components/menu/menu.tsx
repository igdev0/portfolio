import {AvatarWrapper, MenuLinks, MenuWrapper} from "./style";
import MenuLink from "./menu-link";
import ThemeToggle from "../theme-toggle/theme-toggle";
import {Spacer} from "../../styles/helpers";

export default function Menu() {
    return (
        <MenuWrapper>
            <ThemeToggle/>
            <AvatarWrapper>
                <img src="/avatar.jpeg"/>
            </AvatarWrapper>
            <Spacer top={2}/>
            <MenuLinks>
                <MenuLink href="/">
                    ABOUT
                </MenuLink>
                <MenuLink href="/projects">
                    PROJECTS
                </MenuLink>
                <MenuLink href="/contact">
                    CONTACT
                </MenuLink>
                <MenuLink href="/faq">
                    FAQ
                </MenuLink>
            </MenuLinks>
        </MenuWrapper>
    )
}
