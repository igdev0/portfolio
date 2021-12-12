import {ItemWrapper, Triangle, Wrapper} from "./styles";
import {useCarouselState} from "./state";
import {useSprings} from "@react-spring/core";
import {useCallback, useEffect, useRef, useState} from "react";
import {delay} from "../../utils/utils";

const DATA = [
  {
    imageSrc: "/images/photo-1573700204813-3dfdaecf677c.jpeg",
    alt: "photo-1573700204813-3dfdaecf677c",
  },
  {
    imageSrc: "/images/PXL_20211102_154325578.MP.jpg",
    alt: "PXL_20211102_154325578.MP",
  },
  {
    imageSrc: "/images/PXL_20211102_154355192.MP.jpg",
    alt: "PXL_20211102_154355192.MP",
  },
  {
    imageSrc: "/images/PXL_20211102_154424896.MP.jpg",
    alt: "PXL_20211102_154424896.MP",
  },
  {
    imageSrc: "/images/PXL_20211102_170858514.jpg",
    alt: "PXL_20211102_170858514",
  },
  {
    imageSrc: "/images/PXL_20211102_170914848.jpg",
    alt: "PXL_20211102_170914848",
  },
  {
    imageSrc: "/images/PXL_20211103_095435090.MP.jpg",
    alt: "PXL_20211103_095435090.MP",
  },
]
const DELAY = 2000;
export default function Carousel() {
  const {forward, setTotalSlides, currentSlide} = useCarouselState();
  const timer = useRef<object | null>(null);
  const [startedAt, setStartedAt] = useState(0);
  const [previousMillsLeft, setPreviousMillsLeft] = useState(0);
  const [springs, api] = useSprings(DATA.length, (index) => ({
    opacity: index === currentSlide ? 1 : 0,
    z: index === currentSlide ? 1 : 100
  }));

  useEffect(() => {
    api.start(item => {
      return {
        opacity: item === currentSlide ? 1 : 0,
        z: item === currentSlide ? 1 : 100,
      }
    });
  }, [currentSlide, api])

  const startTimer = useCallback((milliseconds = 0) => {
    setStartedAt(new Date().getTime());
    timer.current = setTimeout(() => {
      forward();
    }, DELAY - milliseconds);
    //@ts-ignore
    return () => clearTimeout(timer.current);
  }, [forward, timer]);

  useEffect(() => {
    startTimer();
  }, [currentSlide, startTimer])

  const stopTimer = useCallback(() => {
    setPreviousMillsLeft(new Date().getTime() - startedAt);
    // @ts-ignore
    clearTimeout(timer.current);
  }, [timer, startedAt])

  useEffect(() => {
    setTotalSlides(DATA.length - 1);
  }, [setTotalSlides]);


  const handleMouseLeave = useCallback(async () => {
    startTimer(previousMillsLeft);
    setPreviousMillsLeft(0);
  }, [startTimer, previousMillsLeft])

  const handleMouseEnter = useCallback(() => {
    stopTimer();
  }, [stopTimer])

  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Triangle/>
      {
        DATA.map((item, index) => {
          return <ItemWrapper style={springs[index]} key={index}><img src={item.imageSrc} alt={item.alt}/></ItemWrapper>
        })
      }
    </Wrapper>
  )
}
