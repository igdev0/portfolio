import {useState, useRef} from "react";
import ResizeContext from "./context";

interface ResizeProviderProps {
	children?: JSX.Element | JSX.Element[];
}

export default function ResizeProvider({children}: ResizeProviderProps) {
	const [entries, setEntries] = useState<ResizeObserverEntry[]>([]);
	const ref = useRef<ResizeObserver>(
		new ResizeObserver((_entries) => {
			setEntries(_entries);
		}),
	);

	return (
		<ResizeContext.Provider value={{ref, entries}}>
			<>{children}</>
		</ResizeContext.Provider>
	);
}
