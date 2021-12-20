import type {AppProps} from "next/app";
import dynamic from "next/dynamic";
import Styles from "../styles/styles";
import {useRouter} from "next/router";
import {useEffect, useMemo} from "react";
import reactGA from 'react-ga';
const IntersectionProvider = dynamic(() => import("../components/intersection/intersection"), {ssr: false});

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter();

    useMemo(() => {
        reactGA.initialize(process?.env?.NEXT_PUBLIC_GA_ID??"");
    }, [])

    useEffect(() => {
        reactGA.pageview(router.pathname)
    }, [router.pathname])
    return (
        <IntersectionProvider>
            <Styles/>
            <Component {...pageProps} />
        </IntersectionProvider>
    );
}

export default MyApp;
