import {ImageWrapper} from "./style";
import {ReactEventHandler} from "react";

export interface ImageDataProps {
    src: string;
    alternativeText: string;
    width: number;
    height: number;
    onLoad?: (event: any) => ReactEventHandler<HTMLImageElement>
}

const CMS_URL = process?.env?.NEXT_PUBLIC_CMS_URL;
export default function Image({src, onLoad, alternativeText, width, height}: ImageDataProps) {
    return (
        <ImageWrapper>
            <img {...{src: `${CMS_URL}${src}`, alt: alternativeText, width, height}} onLoad={onLoad} draggable={false}/>
        </ImageWrapper>
    )
}
