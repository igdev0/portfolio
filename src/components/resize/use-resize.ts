import {useState, useContext, useCallback, useRef, useEffect, RefObject} from "react";
import ResizeContext from "./context";

export default function useResize() {
	const {entries, ref: apiRef} = useContext(ResizeContext);
	const element = useRef<HTMLElement | SVGGElement>(null);
	const [boundaries, setBoundaries] = useState<ClientRect | null>(null);

	const observe = useCallback(
		(element: HTMLElement) => {
			if (!apiRef || !apiRef.current) {
				return;
			}
			apiRef.current.observe(element);
		},
		[apiRef],
	);
	const unobserve = useCallback(
		(element: HTMLElement) => {
			if (!apiRef || !apiRef.current) {
				return;
			}
			apiRef.current.unobserve(element);
		},
		[apiRef],
	);

	useEffect(() => {
		const elem = element.current;
		const api = apiRef?.current;
		// @ts-ignore
		api && elem && observe(elem);
		return () => {
			// @ts-ignore
			api && elem && unobserve(elem);
		};
	}, [element, apiRef, observe, unobserve]);

	useEffect(() => {
		const elem = element.current;
		if (entries?.length === 0 || !element) {
			return;
		}
		const entry = entries?.find((item) => item.target === elem);
		entry && setBoundaries(entry?.contentRect);
	}, [element, entries]);

	return [element, boundaries, apiRef, observe, unobserve];
}
