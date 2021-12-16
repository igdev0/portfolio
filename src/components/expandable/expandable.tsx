import {ExpandableWrapper, ExpandableButton} from "./style";
import {useSpring} from "react-spring";
import {ReactChild, useCallback, useEffect, useRef, useState} from "react";

interface ExpandableProps {
    maxHeight: number;
    children: ReactChild
}

export default function Expandable({maxHeight = 500, children}:ExpandableProps) {
    const [springStyles, springAPI] = useSpring(() => ({height: 400}));
    const [fullHeight, setFullHeight] = useState<number | null>(null);
    const [viewInFull, setViewInFull] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const toggleViewInFull = useCallback(({viewInFullValue = null}) => {
        setViewInFull(v => (viewInFullValue !== null ? viewInFullValue : !v));
    }, [setViewInFull])

    const handleElementResize = useCallback(() => {
        if(ref.current) {
            const y = ref.current.scrollHeight;
            const reset = y > maxHeight;
            reset && setFullHeight(y);
            reset && toggleViewInFull({viewInFullValue: false});
        }
    }, [ref, maxHeight, toggleViewInFull])

    useEffect(() => {
        if(typeof window === "undefined") {return}
        window.addEventListener('resize', handleElementResize);
        return () => {
            window.removeEventListener("resize", handleElementResize)
        }
    }, [handleElementResize])

    useEffect(() => {
        viewInFull !== null && springAPI.start({height: viewInFull ? fullHeight : maxHeight});
    }, [fullHeight, viewInFull, maxHeight, springAPI])

    useEffect(() => {
        handleElementResize()
    }, [handleElementResize]);
    return (
        <ExpandableWrapper ref={ref} style={springStyles}>
            {children}
            {
                fullHeight !== null && (
                    <ExpandableButton onClick={toggleViewInFull}>
                        {!viewInFull ? "View more" : "View less"}
                    </ExpandableButton>
                )
            }
        </ExpandableWrapper>
    )
}
