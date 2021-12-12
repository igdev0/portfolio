import {createContext, createRef, RefObject, useRef} from "react";

interface ResizeContextType {
	ref?: RefObject<ResizeObserver>;
	entries?: ResizeObserverEntry[];
}
const ResizeContext = createContext<ResizeContextType>({ref: createRef()});

export default ResizeContext;
