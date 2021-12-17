import type {AppProps} from "next/app";
import dynamic from "next/dynamic";
import Styles from "../styles/styles";

const IntersectionProvider = dynamic(() => import("../components/intersection/intersection"), {ssr: false});

function MyApp({Component, pageProps}: AppProps) {
    return (
        <IntersectionProvider>
            <Styles/>
            <Component {...pageProps} />
        </IntersectionProvider>
    );
}

export default MyApp;
