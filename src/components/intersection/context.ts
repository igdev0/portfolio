import {createContext, createRef, Dispatch, RefObject, SetStateAction} from "react";

export type Threshold = number | number[];

interface IntersectionContextType {
	ref?: RefObject<IntersectionObserver>;
	entries?: IntersectionObserverEntry[];
	setThreshold: Dispatch<SetStateAction<number | number[]>>;
	threshold?: Threshold;
}
const IntersectionContext = createContext<IntersectionContextType>({ref: createRef(), setThreshold: () => {}});

export default IntersectionContext;
