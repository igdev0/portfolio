import {AnchorHTMLAttributes, ReactElement} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import {MenuLinkWrapper} from "./style";

export interface MenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactElement | string;
}

export default function MenuLink({children, href, ...props}: MenuLinkProps) {
    const router = useRouter();
    return (
        <Link href={href??"/"}>
            <MenuLinkWrapper active={router.pathname === href} {...props}>
                {children}
            </MenuLinkWrapper>
        </Link>
    )
}
