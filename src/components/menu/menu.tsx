import {MenuWrapper, AvatarWrapper} from "./style";
import ThemeToggle from "../theme-toggle/theme-toggle";

export default function Menu() {
    return (
        <MenuWrapper>
            <ThemeToggle/>
            <AvatarWrapper>
                <img src="/avatar.jpeg"/>
            </AvatarWrapper>
        </MenuWrapper>
    )
}
