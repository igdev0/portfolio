import {ImageWrapper} from "./style";

export interface ImageDataProps {
    src: string;
    alternativeText: string;
    width: number;
    height: number;
}

const CMS_URL = process?.env?.NEXT_PUBLIC_CMS_URL;
export default function Image({src, alternativeText, width, height}: ImageDataProps) {
    return (
        <ImageWrapper>
            <img {...{src: `${CMS_URL}${src}`, alt: alternativeText, width, height}} draggable={false}/>
        </ImageWrapper>
    )
}
