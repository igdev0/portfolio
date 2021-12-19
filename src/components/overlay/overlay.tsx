import {OverlayWrapper} from "./style";
import {ReactChildren, useCallback, useEffect} from "react";
import useOverlayState from "./state";

interface OverlayProps {
    id: number
    children: ReactChildren
}

export default function Overlay({id, children}: OverlayProps) {
    const {currentVisible, setCurrentVisible} = useOverlayState();
    useEffect(() => {

    }, [currentVisible])
    const handleClick = useCallback((e) => {
        e.stopPropagation();
        if (e.target.getAttribute('data-dialog-close')) {
            setCurrentVisible(null);
        }
    }, [setCurrentVisible])
    return (
        <OverlayWrapper visible={id === currentVisible} data-dialog-close onClick={handleClick}>
            {children}
        </OverlayWrapper>
    )
}
