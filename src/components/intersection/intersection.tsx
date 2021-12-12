import {useState, useRef} from "react";
import IntersectionContext from "./context";

interface IntersectionProviderProps {
	children?: JSX.Element | JSX.Element[];
}

function InitThreshold() {
	let thresholds = [];
	let numSteps = 50;

	for (let i = 1.0; i <= numSteps; i++) {
		let ratio = i / numSteps;
		thresholds.push(ratio);
	}

	thresholds.push(0);
	return thresholds;
}

export default function IntersectionProvider({children}: IntersectionProviderProps) {
	// @ts-ignore
	const [entries, setEntries] = useState<IntersectionObserverEntry[]>();
	const [threshold, setThreshold] = useState<number | number[]>(InitThreshold());
	const ref = useRef<IntersectionObserver>(
		new IntersectionObserver(
			(_entries) => {
				setEntries(_entries);
			},
			{threshold},
		),
	);

	return (
		<IntersectionContext.Provider value={{ref, entries, threshold, setThreshold}}>
			<>{children}</>
		</IntersectionContext.Provider>
	);
}
