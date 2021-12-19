import {OverlayWrapper} from "./style";
import {useState} from "react";
import useOverlayState from "./state";

export default function Overlay() {
    const state = useOverlayState();

    return (
        <OverlayWrapper visible={false}>
            <div>

            </div>
        </OverlayWrapper>
    )
}
