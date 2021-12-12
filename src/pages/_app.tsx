import type {AppProps} from "next/app";
import dynamic from "next/dynamic";
import Styles from "../styles/styles";

const ResizeProvider = dynamic(() => import("../components/resize/resize"), {ssr: false});
const IntersectionProvider = dynamic(() => import("../components/intersection/intersection"), {ssr: false});

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ResizeProvider>
            <IntersectionProvider>
                <Styles/>
                <Component {...pageProps} />
            </IntersectionProvider>
        </ResizeProvider>
    );
}

export default MyApp;
