import {useState, useContext, useCallback, useRef, useEffect} from "react";
import IntersectionContext from "./context";
import {Threshold} from "./context";

export default function useIntersection(threshold?: Threshold) {
	const {entries, ref: apiRef, setThreshold} = useContext(IntersectionContext);
	const element = useRef(null);
	const [entry, setEntry] = useState<IntersectionObserverEntry>();

	const observe = useCallback(
		(element: HTMLElement | null) => {
			if(!element) {return}
			if (!apiRef || !apiRef.current) {
				return;
			}
			apiRef.current.observe(element);
		},
		[apiRef],
	);
	const unobserve = useCallback(
		(element: HTMLElement | null) => {
			if (!apiRef || !apiRef.current || !element) {
				return;
			}
			apiRef.current.unobserve(element);
		},
		[apiRef],
	);

	useEffect(() => {
		const elem = element.current;
		const api = apiRef?.current;
		api && elem && observe(elem);
		return () => {
			api && elem && unobserve(elem);
		};
	}, [element, apiRef, observe, unobserve]);

	useEffect(() => {
		const elem = element.current;
		if (entries?.length === 0 || !element) {
			return;
		}
		const entry = entries?.find((item) => item.target === elem);
		entry && setEntry(entry);
	}, [element, entries]);

	useEffect(() => {
		threshold && setThreshold(threshold);
	}, [threshold, setThreshold]);
	return {element, entry};
}
