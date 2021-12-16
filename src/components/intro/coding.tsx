import * as React from "react"
import {SVGProps, useCallback, useEffect} from "react"
import {animated, useSprings} from "react-spring";
import {delay} from "../../utils/utils";
import WithAnimatedSvg from "./with-animated-svg";

interface CodingProps extends SVGProps<SVGSVGElement> {
    onAnimationComplete: () => void;
    allocatedDuration: number;
    taskAnimationComplete: boolean;
};

const CODE_PATHS = [
    {
        index: 3,
        "className": "cls-5",
        "d": "M145.29 49.47h37.28v11.41h-37.28z"
    },
    {
        index: 4,
        "className": "cls-6",
        "d": "M191.92 49.47h37.28v11.41h-37.28z"
    },
    {
        index: 1,
        "className": "cls-5",
        "d": "M48.13 49.47h37.28v11.41H48.13z"
    },
    {
        index: 2,
        "className": "cls-5",
        "d": "M96.07 49.47h37.28v11.41H96.07z"
    },
    {
        index: 5,
        "className": "cls-7",
        "d": "M239.21 49.29h6.47V60.7h-6.47z"
    },
    {
        index: 0,
        "className": "cls-8",
        "d": "M11.92 49.03H26.9v12.11H11.92z"
    },
    {
        index: 6,
        "className": "cls-8",
        "d": "M11.92 68.37H26.9v12.11H11.92z"
    },
    {
        index: 9,
        "className": "cls-5",
        "d": "M133.64 68.81h32.7v11.41h-32.7z"
    },

    {
        index: 11,
        "className": "cls-6",
        "d": "M174.55 68.81h32.7v11.41h-32.7z"
    },
    {
        index: 7,
        "className": "cls-5",
        "d": "M48.4 68.81h32.7v11.41H48.4z"
    },
    {
        index: 8,
        "className": "cls-7",
        "d": "M90.46 68.81h32.7v11.41h-32.7z"
    },
    {
        index: 12,
        "className": "cls-7",
        "d": "M216.03 68.63h5.68v11.41h-5.68z"
    },
    {
        index: 13,
        "className": "cls-8",
        "d": "M11.92 89.24H26.9v12.11H11.92z"
    },
    {
        index: 15,
        "className": "cls-5",
        "d": "M154.86 89.68h40.84v11.41h-40.84z"
    },
    {
        index: 16,
        "className": "cls-6",
        "d": "M205.95 89.68h40.84v11.41h-40.84z"
    },
    {
        index: 14,
        "className": "cls-5",
        "d": "M48.4 89.68h40.84v11.41H48.4z"
    },
    {
        index: 15,
        "className": "cls-7",
        "d": "M100.93 89.68h40.84v11.41h-40.84z"
    },
    {
        index: 17,
        "className": "cls-7",
        "d": "M257.76 89.5h7.09v11.41h-7.09z",
    },
    {
        index: 18,
        "className": "cls-8",
        "d": "M11.92 108.72H26.9v12.11H11.92z"
    },
    {
        index: 21,
        "className": "cls-5",
        "d": "M152.09 109.16h39.78v11.41h-39.78z"
    },
    {
        index: 22,
        "className": "cls-6",
        "d": "M201.84 109.16h39.78v11.41h-39.78z"
    },
    {
        index: 19,
        "className": "cls-5",
        "d": "M48.4 109.16h39.78v11.41H48.4z"
    },
    {
        index: 20,
        "className": "cls-7",
        "d": "M99.56 109.16h39.78v11.41H99.56z"
    },
    {
        index: 23,
        "className": "cls-7",
        "d": "M252.3 108.98h6.91v11.41h-6.91z"
    },
    {
        index: 24,
        "className": "cls-8",
        "d": "M11.92 128.19H26.9v12.11H11.92z"
    },
    {
        index: 27,
        "className": "cls-5",
        "d": "M165.7 128.64h44.72v11.41H165.7z"
    },
    {
        index: 28,
        "className": "cls-6",
        "d": "M221.63 128.64h44.72v11.41h-44.72z"
    },
    {
        index: 25,
        "className": "cls-5",
        "d": "M49.14 128.64h44.72v11.41H49.14z"
    },
    {
        index: 26,
        "className": "cls-7",
        "d": "M106.65 128.64h44.72v11.41h-44.72z"
    },
    {
        index: 29,
        "className": "cls-7",
        "d": "M278.35 128.46h7.76v11.41h-7.76z"
    },
    {
        index: 30,
        "className": "cls-8",
        "d": "M11.92 147.67h14.21v12.11H11.92z"
    },
    {
        index: 33,
        "className": "cls-5",
        "d": "M157.72 148.11h42.4v11.41h-42.4z"
    },
    {
        index: 34,
        "className": "cls-6",
        "d": "M210.75 148.11h42.4v11.41h-42.4z"
    },
    {
        index: 31,
        "className": "cls-5",
        "d": "M47.21 148.11h42.4v11.41h-42.4z"
    },
    {
        index: 32,
        "className": "cls-7",
        "d": "M101.74 148.11h42.4v11.41h-42.4z"
    },
    {
        index: 35,
        "className": "cls-7",
        "d": "M264.52 147.93h7.36v11.41h-7.36z"
    },
    {
        index: 36,
        "className": "cls-8",
        "d": "M11.92 167.85h14.21v12.11H11.92z"
    },
    {
        index: 39,
        "className": "cls-5",
        "d": "M147.59 168.29h38.51v11.41h-38.51z"
    },
    {
        index: 40,
        "className": "cls-6",
        "d": "M195.75 168.29h38.51v11.41h-38.51z"
    },
    {
        index: 37,
        "className": "cls-5",
        "d": "M47.21 168.29h38.51v11.41H47.21z"
    },
    {
        index: 38,
        "className": "cls-7",
        "d": "M96.74 168.29h38.51v11.41H96.74z"
    },
    {
        index: 41,
        "className": "cls-7",
        "d": "M244.6 168.11h6.69v11.41h-6.69z"
    },
    {
        index: 42,
        "className": "cls-8",
        "d": "M12.08 187.38h14.21v12.11H12.08z"
    },
].sort((a, b) => a.index == undefined ? 0 : a.index > b.index ? 1 : -1)

const CLONE = JSON.parse(JSON.stringify(CODE_PATHS));
CLONE.pop();

function Coding({onAnimationComplete, taskAnimationComplete, allocatedDuration}: CodingProps) {
    const SETS_DURATION = allocatedDuration * .9;
    const SET_DURATION = SETS_DURATION * .5;
    const EACH_DURATION = (SET_DURATION / CODE_PATHS.length) * .4;
    const EACH_DELAY = (SET_DURATION / CODE_PATHS.length) * .6;
    const [pathsSpringStyles, pathsSpringApi] = useSprings(CODE_PATHS.length, (index) => ({
        opacity: 0,
        delay: index * EACH_DELAY,
        config: {
            duration: EACH_DURATION
        }
    }));
    const [secondPathsSpringStyles, secondPathsSpringApi] = useSprings(CLONE.length, (index) => ({
        opacity: 0,
        delay: index * EACH_DELAY,
        config: {
            duration: EACH_DURATION,
        }
    }));


    const startFirstAnimation = useCallback(async () => {
        pathsSpringApi.start((index) => ({opacity: 1, delay: index * EACH_DELAY}));
        await delay(SET_DURATION);
        secondPathsSpringApi.start((index) => ({opacity: 1, delay: index * EACH_DELAY}));
        await delay(SET_DURATION);
        onAnimationComplete();
    }, [pathsSpringApi, SET_DURATION, EACH_DELAY, onAnimationComplete, secondPathsSpringApi]);

    useEffect(() => {
        taskAnimationComplete && startFirstAnimation();
    }, [startFirstAnimation, taskAnimationComplete])
    return (
        <WithAnimatedSvg visible={taskAnimationComplete} viewBox="0 0 436 353.5945">
            <defs>
                <style>
                    {
                        ".cls-2{fill:#313335}.cls-5,.cls-6,.cls-7{fill:none}.cls-5{fill:#bc6200}.cls-5,.cls-6,.cls-7{stroke-linecap:round;stroke-linejoin:round;stroke-width:0}.cls-6{fill:#e1af63}.cls-7{fill:#fff}.cls-8{fill:#56595b}"
                    }
                </style>
            </defs>
            <path
                style={{
                    fill: "#2b2b2b",
                }}
                d="M0 28.47h436V353.6H0z"
            />
            <path className="cls-2" d="M0 28.47h38.96V353.6H0z"/>
            ,
            <path
                style={{
                    stroke: "#727272",
                    strokeMiterlimit: 10,
                    fill: "none",
                }}
                d="M310.56 31.31v322.28"
            />,
            <path
                className="cls-2"
                d="M6.56 0h100.07a7.24 7.24 0 0 1 7.24 7.24v21.23H0V6.56A6.56 6.56 0 0 1 6.56 0Z"
            />
            <path
                style={{
                    fill: "#3d3d3d",
                }}
                d="M19.48 8.99H88.4v10.49H19.48z"
            />
            {pathsSpringStyles.map((item, index) => (<animated.path {...CODE_PATHS[index]} key={index} style={item}/>))}
            <g style={{transform: 'translateY(160px)'}}>
                {secondPathsSpringStyles.map((item, index) => (<animated.path {...CLONE[index]} key={index} style={item}/>))}
            </g>

        </WithAnimatedSvg>
    )
}

export default Coding
