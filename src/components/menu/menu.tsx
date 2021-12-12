import {AvatarWrapper, MenuLinks, MenuWrapper, SocialsWrapper} from "./style";
import MenuLink from "./menu-link";
import ThemeToggle from "../theme-toggle/theme-toggle";
import {Spacer} from "../../styles/helpers";
import Github from "../icon/github";
import LinkedIn from "../icon/linked-in";

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
            <SocialsWrapper>
                <a href="https://www.linkedin.com/in/ianos-dorultan-364235143/" target="_blank">
                    <LinkedIn/>
                </a>
                <a href="https://github.com/dorultan" target="_blank">
                    <Github/>
                </a>
            </SocialsWrapper>
        </MenuWrapper>
    )
}
