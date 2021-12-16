import * as React from "react"
import {SVGProps, useCallback, useEffect} from "react"
import WithAnimatedSvg from "./with-animated-svg";
import {animated, useSpring} from "react-spring";
import {delay} from "../../utils/utils";

interface SheetProps extends SVGProps<SVGSVGElement>{
    onAnimationComplete: () => void;
    canAnimate: boolean;
}
function Sheet({onAnimationComplete, canAnimate}: SheetProps) {
    const [magnifierSpringStyles, magnifierSpringApi] = useSpring(() => ({x: 0, y: 0}));
    const runSteps = useCallback(async () => {
        await delay(500);
        magnifierSpringApi.start({x: 69, y: 0});
        await delay(500);
        magnifierSpringApi.start({x: -10, y: 70});
        await delay(500);
        magnifierSpringApi.start({x: 69, y: 70});
        await delay(500);
        magnifierSpringApi.start({x: -10, y: 180});
        await delay(500);
        magnifierSpringApi.start({x: 69, y: 180});
        await delay(500);
        onAnimationComplete();
    }, [magnifierSpringApi, onAnimationComplete])
    useEffect(() => {
        canAnimate && runSteps()
    }, [canAnimate, runSteps])
    return (
        // @ts-ignore
        <WithAnimatedSvg visible={canAnimate} id="Sheet" viewBox="0 0 245.8623 347.2516">
            <defs>
                <style>{".cls-3{fill:#232323}"}</style>
            </defs>
            <g id="Sheet">
                <path
                    style={{
                        fill: "#e8e8e8",
                    }}
                    d="M245.86 347.25H0V.58h203.64l42.22 27.26v319.41z"
                />
                <path
                    style={{
                        fill: "#bcbcbc",
                    }}
                    d="M245.7 27.76h-41.87V0l41.87 27.76z"
                />
                <circle className="cls-3" cx={51.82} cy={152.92} r={8.65}/>
                <path
                    className="cls-3"
                    d="M65.93 147.91h17.29v10.47H65.93zM90.05 147.91h66.9v10.47h-66.9z"
                />
                <circle className="cls-3" cx={51.82} cy={175.67} r={8.65}/>
                <path
                    className="cls-3"
                    d="M65.93 170.67h17.29v10.47H65.93zM90.05 170.67h66.9v10.47h-66.9z"
                />
                <circle className="cls-3" cx={51.82} cy={200.7} r={8.65}/>
                <path
                    className="cls-3"
                    d="M65.93 195.7h17.29v10.47H65.93zM90.05 195.7h66.9v10.47h-66.9z"
                />
                <circle className="cls-3" cx={51.82} cy={227.1} r={8.65}/>
                <path
                    className="cls-3"
                    d="M65.93 222.1h17.29v10.47H65.93zM90.05 222.1h66.9v10.47h-66.9zM44.08 71.91h36.41v13.2H44.08zM88.23 72.36h55.98v13.2H88.23zM151.03 72.36h38.23v13.2h-38.23z"
                />
                <path
                    className="cls-3"
                    transform="rotate(180 286.63 474.95)"
                    d="M383.99 845.23h36.41v13.2h-36.41z"
                />
                <path
                    className="cls-3"
                    transform="rotate(180 232.7 474.495)"
                    d="M320.28 844.77h55.98v13.2h-55.98z"
                />
                <path
                    className="cls-3"
                    transform="rotate(180 178.765 474.495)"
                    d="M275.22 844.77h38.23v13.2h-38.23z"
                />
                <path
                    className="cls-3"
                    transform="rotate(180 270.7 494.52)"
                    d="M352.14 864.8h68.27V878h-68.27z"
                />
                <path
                    className="cls-3"
                    transform="rotate(180 219.5 494.065)"
                    d="M325.28 864.34h19.57v13.2h-19.57z"
                />
                <path
                    className="cls-3"
                    transform="rotate(180 180.815 494.065)"
                    d="M275.22 864.34h42.33v13.2h-42.33z"
                />
                <path
                    className="cls-3"
                    transform="rotate(180 284.81 672.47)"
                    d="M382.17 1042.75h36.41v13.2h-36.41z"
                />
                <path
                    className="cls-3"
                    transform="rotate(180 230.875 672.015)"
                    d="M318.46 1042.29h55.98v13.2h-55.98z"
                />
                <path
                    className="cls-3"
                    transform="rotate(180 176.945 672.015)"
                    d="M273.4 1042.29h38.23v13.2H273.4z"
                />
                <path
                    className="cls-3"
                    d="M42.26 269.43h36.41v13.2H42.26zM86.41 269.88h55.98v13.2H86.41zM149.21 269.88h38.23v13.2h-38.23zM42.26 249.86h68.27v13.2H42.26zM117.81 250.31h19.57v13.2h-19.57zM145.12 250.31h42.33v13.2h-42.33zM40.44 20.02h114.69v14.56H40.44z"
                />
            </g>
            <animated.g id="Magnifier" style={magnifierSpringStyles}>
                <path
                    d="M367.21 859.27A47.22 47.22 0 1 1 320 812.05a47 47 0 0 1 47.21 47.22Z"
                    transform="translate(-231.14 -753.75)"
                    style={{
                        opacity: 0.5,
                        fill: "#fff",
                        stroke: "#c9c9c9",
                        strokeMiterlimit: 10,
                    }}
                />
                <path
                    d="M404 950.11a6.59 6.59 0 0 1-9.33 0l-49.24-49.24a6.08 6.08 0 0 1-1-1.21 47.24 47.24 0 0 0 10.13-8.28l.16.16L404 940.78a6.59 6.59 0 0 1 0 9.33Z"
                    transform="translate(-231.14 -753.75)"
                    style={{
                        fill: "#fff",
                        stroke: "#c9c9c9",
                        strokeMiterlimit: 10,
                    }}
                />
            </animated.g>
        </WithAnimatedSvg>
    )
}

export default Sheet
