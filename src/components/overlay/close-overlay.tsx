import {CloseOverlayWrapper} from "./style";
import useOverlayState from "./state";
import {useCallback} from "react";

export default function CloseOverlay() {
    const {setCurrentVisible} = useOverlayState();
    const closeOverlay = useCallback(() => {
        setCurrentVisible(null);
    }, [setCurrentVisible])
    return (
        <CloseOverlayWrapper onClick={closeOverlay}>
            &times;
        </CloseOverlayWrapper>
    )
}
