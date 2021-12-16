import {SVGProps, useCallback, useEffect} from "react"
import {animated, useSpring, useSprings} from "react-spring";
import {delay} from "../../utils/utils";
import WithAnimatedSvg from './with-animated-svg';

interface TaskProps extends SVGProps<SVGSVGElement> {
    onAnimationComplete: () => void;
    taskComplete: boolean;
    sheetAnimationComplete: boolean;
    onTaskMarkedAsComplete: () => void;
    allocatedDuration: number;
};

const TASK_PATHS = [
    {d: "M1842.01 806.77h43.54v7.44h-43.54z", transform: "rotate(.1 452199.288 -1046398.36)", className: "cls-2"},
    {d: "M1895.43 806.84h13.02v7.44h-13.02z", transform: "translate(-1825.62 -787.9)", className: "cls-2"},
    {d: "M1916.53 806.88h21.1v7.44h-21.1z", transform: "rotate(.1 452262.313 -1046398.414)", className: "cls-2"},
    {d: "M1945.7 806.94h32.32v7.44h-32.32z", transform: "rotate(.1 452296.69 -1046398.444)", className: "cls-2"},
    {d: "M1985.21 807.01h32.32v7.44h-32.32z", transform: "rotate(.1 452336.798 -1046398.48)", className: "cls-2"},
    {d: "M1841.99 818.18h32.32v7.44h-32.32z", transform: "rotate(-179.9 944.325 428.821)", className: "cls-2"},
    {d: "M1881.49 818.24h32.32v7.44h-32.32z", transform: "rotate(-179.9 983.825 428.887)", className: "cls-2"},
    {d: "M1921.89 818.3h21.1v7.44h-21.1z", transform: "rotate(-179.9 1018.615 428.946)", className: "cls-2"},
    {d: "M1951.07 818.35h13.02v7.44h-13.02z", transform: "rotate(180 1043.375 427.9)", className: "cls-2"},
    {d: "M1973.96 818.41h43.54v7.44h-43.54z", transform: "rotate(-179.9 1081.91 429.051)", className: "cls-2"},
    {d: "M1841.97 831.54h43.54v7.44h-43.54z", transform: "rotate(.1 452199.308 -1046375.441)", className: "cls-2"},
    {d: "M1895.39 831.61h13.02v7.44h-13.02z", transform: "rotate(.1 452239.415 -1046375.476)", className: "cls-2"},
    {d: "M1916.48 831.65h21.1v7.44h-21.1z", transform: "rotate(.1 452262.333 -1046375.496)", className: "cls-2"},
    {d: "M1945.66 831.71h32.32v7.44h-32.32z", transform: "rotate(.1 452296.71 -1046375.526)", className: "cls-2"},
    {d: "M1985.16 831.78h32.32v7.44h-32.32z", transform: "rotate(.1 452336.818 -1046375.561)", className: "cls-2"},
]


function Task({sheetAnimationComplete, onAnimationComplete, taskComplete, onTaskMarkedAsComplete, allocatedDuration}: TaskProps) {
    const TYPING_DURATION = allocatedDuration * .5;
    const EACH_WORD_TIME = (TYPING_DURATION / TASK_PATHS.length);
    const TYPING_WORD_DURATION = EACH_WORD_TIME * 0.8;
    const TYPING_WORD_DELAY = EACH_WORD_TIME * 0.2;
    const PRIORTY_BULLET_DURATION = allocatedDuration * .15;
    const PERSON_ALLOCATION = allocatedDuration * .15;
    const [priorityCircleSpringStyle, priorityCircleSpringApi] = useSpring(() => ({opacity: 0, duration: PRIORTY_BULLET_DURATION}));
    const [taskCompleteSpringStyle, taskCompleteSpringApi] = useSpring(() => ({opacity: 0, duration: PERSON_ALLOCATION}));
    const [personSpringStyle, personSpringApi] = useSpring(() => ({opacity: 0, config: {duration: PERSON_ALLOCATION}}));
    const [tasksSpringStyles, tasksSpringApi] = useSprings(TASK_PATHS.length, (index) => ({
        opacity: 0,
        delay: index * TYPING_WORD_DELAY,
        config: {
            duration: TYPING_WORD_DURATION * TASK_PATHS.length,
            friction: TYPING_WORD_DURATION * TASK_PATHS.length,
        }
    }));
    const runSteps = useCallback(async () => {
        tasksSpringApi.start((index) => ({
            opacity: 1,
            delay: index * TYPING_WORD_DELAY,
        }));
        await delay(TYPING_DURATION);
        priorityCircleSpringApi.start({opacity: 1});
        await delay(PRIORTY_BULLET_DURATION);
        personSpringApi.start({opacity: 1});
        await delay(PERSON_ALLOCATION);
        onAnimationComplete();
    }, [tasksSpringApi, PRIORTY_BULLET_DURATION, PERSON_ALLOCATION, TYPING_DURATION, TYPING_WORD_DELAY, priorityCircleSpringApi, personSpringApi, onAnimationComplete])
    useEffect(() => {
        sheetAnimationComplete && runSteps()
    }, [runSteps, sheetAnimationComplete])

    useEffect(() => {
        if(!taskComplete) {return}
        (async () => {
            taskCompleteSpringApi.start({opacity: 1});
            await delay(500);
            onTaskMarkedAsComplete();
        })()
    }, [taskComplete, taskCompleteSpringApi, onTaskMarkedAsComplete])
    return (
        <WithAnimatedSvg visible={sheetAnimationComplete} viewBox="0 0 266 85">
            <defs>
                <style>{".cls-2{fill:#f9f4ed}"}</style>
            </defs>
            <g>
                <rect
                    x={2}
                    y={2}
                    width={202.45}
                    height={80.35}
                    rx={7.02}
                    style={{
                        fill: "#262626",
                        stroke: "#3f3f3f",
                        strokeMiterlimit: 10,
                        strokeWidth: 4,
                    }}
                />
                {tasksSpringStyles.map((item, index) => (
                    <animated.path key={index} style={item} {...TASK_PATHS[index]}/>))}
                <animated.path
                    d="M2019.94 863a8.55 8.55 0 0 1-7.22 0 3.75 3.75 0 0 1 2.58-2.56 2.88 2.88 0 1 1 2 0 3.81 3.81 0 0 1 1.75 1 3.66 3.66 0 0 1 .89 1.56Z"
                    transform="translate(-1827 -787.66)"
                    style={{
                        ...personSpringStyle,
                        fill: "#757575",
                    }}
                />
                <animated.path
                    style={{
                        ...taskCompleteSpringStyle,
                        fill: "#73f94e",
                    }}
                    d="m267.7 29.43-20.14 20.13-7.59 7.59-17.22-17.22 7.59-7.59 9.63 9.64 20.14-20.14 7.59 7.59z"
                />
                <animated.circle
                    style={{...priorityCircleSpringStyle, fill: "#f94848"}}
                    cx={10.7}
                    cy={10.2}
                    r={4}
                />
            </g>
        </WithAnimatedSvg>
    )
}

export default Task
