import Sheet from "./sheet";
import {AnimationContainer, IntroTitle, Wrapper} from "./style";
import {useCallback, useEffect, useLayoutEffect, useMemo, useState} from "react";
import Task from "./task";
import Coding from "./coding";
import {TOTAL_ANIMATION_DURATION} from "./const";
import {useRouter} from "next/router";
import {useSpring} from "react-spring";

const INITIAL_STATE = {
    sheetAnimationComplete: false,
    taskAnimationComplete: false,
    codingAnimationComplete: false,
    introAnimationComplete: false,
};

interface IntroStateProps {
    sheetAnimationComplete: boolean;
    taskAnimationComplete: boolean;
    codingAnimationComplete: boolean;
    introAnimationComplete: boolean;
}

export default function Intro() {
    const router = useRouter();
    const [state, setState] = useState<IntroStateProps>(JSON.parse(JSON.stringify(INITIAL_STATE)));
    const DISABLED = router.query?.animation_disabled !== undefined;
    const [shouldAnimate] = useState(router.asPath !== "/?animation_disabled=true");
    const [springStyles, springApi] = useSpring(() => ({opacity: !DISABLED && router.pathname === "/" ? 1 : 0}));
    const handleSheetAnimationComplete = useCallback(() => {
        setState((v) => ({...v, sheetAnimationComplete: true}));
    }, [setState]);

    const handleTaskAnimationComplete = useCallback(() => {
        setState((v) => ({...v, taskAnimationComplete: true}));
    }, []);

    const handleCodingAnimationComplete = useCallback(() => {
        setState((v) => ({...v, codingAnimationComplete: true}));
    }, []);

    useLayoutEffect(() => {
        if(router.asPath === "/?animation_disabled=true") {
            springApi.start({opacity: 0});
        }
    }, [router, springApi]);

    const handleTaskMarkedAsComplete = useCallback(() => {
        const id = setTimeout(() => {
            springApi.start({opacity: 0});
            clearTimeout(id);
        }, 500)
    }, [springApi])

    return (
        <Wrapper style={springStyles}>
            <AnimationContainer>
                <Sheet canAnimate={shouldAnimate} onAnimationComplete={handleSheetAnimationComplete}/>
                <Task allocatedDuration={TOTAL_ANIMATION_DURATION * .10}
                      onTaskMarkedAsComplete={handleTaskMarkedAsComplete} taskComplete={state.codingAnimationComplete}
                      sheetAnimationComplete={state.sheetAnimationComplete}
                      onAnimationComplete={handleTaskAnimationComplete}/>
                <Coding taskAnimationComplete={state.taskAnimationComplete}
                        allocatedDuration={TOTAL_ANIMATION_DURATION * .25}
                        onAnimationComplete={handleCodingAnimationComplete}/>
            </AnimationContainer>
        </Wrapper>
    )
}
