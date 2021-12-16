import {CodingSvg, SheetSvg, TaskSvg} from "./style";
import {ReactChildren, SVGProps, useEffect, useMemo} from "react";
import {useSpring} from "react-spring";

interface WithAnimatedSvgTypes extends SVGProps<SVGSVGElement> {
    type: "task" | "sheet" | "coding"
    visible: boolean;
    children: ReactChildren
}

export default function WithAnimatedSvg({type, visible, ...props}: WithAnimatedSvgTypes) {
    const [styles, springApi] = useSpring(() => ({opacity: 0}));
    const Component = useMemo(() => {
        if (type === "task") {
            return TaskSvg;
        } else if (type === "sheet") {
            return SheetSvg;
        } else {
            return CodingSvg;
        }
    }, [type]);
    useEffect(() => {
        visible && springApi.start({opacity: 1});
    }, [visible])

    return (
        <Component style={styles} {...props}>
            {props.children}
        </Component>
    )
}
