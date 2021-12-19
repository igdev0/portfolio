import Sheet from "./sheet";
import {AnimationContainer, IntroTitle, Wrapper} from "./style";
import {useCallback, useEffect, useLayoutEffect, useState} from "react";
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

function generateString(length: number) {
    const CHARACTERS = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
    let result = ' ';
    const charactersLength = CHARACTERS.length;
    for (let i = 0; i < length; i++) {
        result += CHARACTERS.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const INTRO_TITLE_TEXT = "I'M A DIGITAL DEVELOPER &#128640;";

export default function Intro() {
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [state, setState] = useState<IntroStateProps>(JSON.parse(JSON.stringify(INITIAL_STATE)));
    const [title, setTitle] = useState("");
    const router = useRouter();
    const [springStyles, springApi] = useSpring(() => ({opacity: typeof window !== "undefined" && router.query?.animation_disabled !== "true" && router.pathname === "/" ? 1 : 0}));
    const handleSheetAnimationComplete = useCallback(() => {
        setState((v) => ({...v, sheetAnimationComplete: true}));
    }, [setState]);

    const handleTaskAnimationComplete = useCallback(() => {
        setState((v) => ({...v, taskAnimationComplete: true}));
    }, []);

    const handleCodingAnimationComplete = useCallback(() => {
        setState((v) => ({...v, codingAnimationComplete: true}));
    }, []);

    const handleTaskMarkedAsComplete = useCallback(() => {
        for (let i = 0; i < INTRO_TITLE_TEXT.length; i++) {
            const time = setTimeout(() => {
                setTitle(`<span>${INTRO_TITLE_TEXT.substring(0, i)} ${generateString(INTRO_TITLE_TEXT.length - (i + 1))}</span>`)
                clearTimeout(time);
            }, 100 * i)
        }
    }, [setTitle])
    useEffect(() => {
        (async () => {
            state.codingAnimationComplete && await router.push("/?animation_disabled=true");
        })()
    }, [state.codingAnimationComplete, router])
    useEffect(() => {
        setTitle(`<span>${generateString(INTRO_TITLE_TEXT.length)}</span>`);
    }, [setTitle]);

    // useEffect(() => {
    //     if(title === "<span>I'M A DIGITAL DEVELOPER &#128640  </span>" && typeof  window !== "undefined") {
    //         (async () => {
    //             setTitle("");
    //             springApi.start({opacity: 0});
    //         })()
    //     }
    // }, [title, springApi, router])

    useLayoutEffect(() => {
        const canAnimate = !router.query?.animation_disabled && router.pathname === "/";
        setShouldAnimate(canAnimate);
        !canAnimate && springApi.start({opacity: 0});
    }, [router, springApi]);

    return (
        <Wrapper style={springStyles}>
            {/*{shouldAnimate && <IntroTitle dangerouslySetInnerHTML={{__html: title}}/>}*/}
            <AnimationContainer>
                <Sheet canAnimate={shouldAnimate} onAnimationComplete={handleSheetAnimationComplete}/>
                <Task allocatedDuration={TOTAL_ANIMATION_DURATION * .25}
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
