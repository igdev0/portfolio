import {AvatarWrapper, MenuLinks, MenuWrapper, MobileToggleWrapper, SocialsWrapper, RequestCVButton} from "./style";
import MenuLink from "./menu-link";
import ThemeToggle from "../theme-toggle/theme-toggle";
import {Spacer} from "../../styles/helpers";
import Github from "../icon/github";
import LinkedIn from "../icon/linked-in";
import {useCallback, useState} from "react";
import Times from "../icon/times";
import Burger from "../icon/burger";
import useOverlayState from "../overlay/state";
import {REQUEST_CV_ID} from "../../constants";

export default function Menu() {
    const [mobileVisible, setMobileVisible] = useState(false);
    const {setCurrentVisible} = useOverlayState();
    const handleRequestButton = useCallback(() => {
        setCurrentVisible(REQUEST_CV_ID);
    }, [setCurrentVisible])
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
                    <MenuLink href="/?animation_disabled=true">
                        ABOUT
                    </MenuLink>
                    <MenuLink href="/projects">
                        PROJECTS
                    </MenuLink>
                    <MenuLink href="/contact">
                        CONTACT
                    </MenuLink>
                    <RequestCVButton onClick={handleRequestButton}>
                        REQUEST CV
                    </RequestCVButton>
                </MenuLinks>
                <SocialsWrapper>
                    <a href="https://www.linkedin.com/in/ianos-dorultan-364235143/" target="_blank" rel="noreferrer">
                        <LinkedIn/>
                    </a>
                    <a href="https://github.com/dorultan" target="_blank" rel="noreferrer">
                        <Github/>
                    </a>
                </SocialsWrapper>
            </MenuWrapper>
        </>
    )
}
