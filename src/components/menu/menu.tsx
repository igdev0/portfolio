import {AvatarWrapper, MenuLinks, MenuWrapper, MobileToggleWrapper, SocialsWrapper} from "./style";
import MenuLink from "./menu-link";
import ThemeToggle from "../theme-toggle/theme-toggle";
import {Spacer} from "../../styles/helpers";
import Github from "../icon/github";
import LinkedIn from "../icon/linked-in";
import {useState} from "react";
import Times from "../icon/times";
import Burger from "../icon/burger";


export default function Menu() {
    const [mobileVisible, setMobileVisible] = useState(false);
    return (
        <>
            <MobileToggleWrapper>
                {mobileVisible && <Times onClick={() => setMobileVisible(false)}/>}
                {!mobileVisible && <Burger onClick={() => setMobileVisible(true)}/>}
            </MobileToggleWrapper>
            <MenuWrapper menuVisible={mobileVisible}>
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
        </>
    )
}
