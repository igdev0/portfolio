import create from "zustand";

type TotalSlides = number;
type SlideIndex = number;
interface CarouselStateType {
  currentSlide: SlideIndex;
  totalSlides: TotalSlides;
  setTotalSlides: (index: TotalSlides) => void;
  forward: () => void;
  setCurrentSlide: (index: SlideIndex) => void;
}

export const useCarouselState = create<CarouselStateType>((set, get) => {
  return {
    currentSlide: 0,
    setCurrentSlide(index: SlideIndex) {
      set({currentSlide: index});
    },
    setTotalSlides(totalSlides: TotalSlides) {
      set({totalSlides});
    },
    forward() {
      const {totalSlides, currentSlide} = get();
      set({currentSlide: currentSlide + 1 > totalSlides ? 0 : currentSlide + 1});
    },
  }
})
