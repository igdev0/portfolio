import {createContext, PropsWithChildren, RefObject, useMemo, useRef, useState} from 'react';
import {profile} from '@/content/profile';
import {calcFrames} from '@/components/lib/tech-stack/utils';

export interface TechStackContext {
  active: number;
  data: typeof profile.stack.tech;
  keys: (keyof typeof profile.stack.tech)[];
  controllers: RefObject<HTMLButtonElement[]>;
  cards: RefObject<HTMLDivElement[]>;
  activeRef: RefObject<number>;
  draws: PathData[];
  drawsRef: RefObject<PathData[]>;
  pathRef: RefObject<SVGPathElement | null>;
  dragOffsetRef: RefObject<{ x: number, y: number }>;
  frames: FrameRef[];

  setActive(active: number): void;

  calculateDraws(): void;
}

export interface PathData {
  mx: number;
  my: number;
  lx: number;
  ly: number;
  c: number;
}

export const TechStackContext = createContext<TechStackContext>({
  active: 0,
  setActive: () => {
  },
  data: profile.stack.tech,
  keys: [],
  cards: {current: []},
  controllers: {current: []},
  drawsRef: {current: []},
  draws: [],
  activeRef: {current: 0},
  dragOffsetRef: {current: {x: 0, y: 0}},
  calculateDraws() {
  },
  pathRef: {current: null},
  frames: []
});

interface FrameRef {
  key: string;
  distance: number;
  offset: number;
  scale: number;
  z: number;
  i: number;
}

export function TechStackProvider(props: PropsWithChildren & Record<"data", typeof profile.stack.tech>) {
  const [active, setActive] = useState(0);
  const [draws, setDraws] = useState<PathData[]>([]);
  const cards = useRef<HTMLDivElement[]>([]);
  const drawsRef = useRef<PathData[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const dragOffsetRef = useRef<{ x: number; y: number }>({x: 0, y: 0});
  const controllers = useRef<HTMLButtonElement[]>([]);
  const activeRef = useRef(active);
  const keys = Object.keys(profile.stack.tech) as TechStackContext['keys'];

  const frames = useMemo<FrameRef[]>(() => {
    return calcFrames(active, keys);
  }, [active]);

  const calculateDraws = () => {
    const {x, y} = dragOffsetRef.current;

    setDraws(
        frames.map((frame) => {
          const controller = controllers.current[frame.i];
          const card = cards.current[frame.i];
          const border = 2;
          const mx = controller.offsetLeft + controller.clientWidth + border;
          const my = controller.offsetTop + controller.clientHeight / 2;
          const rect = card.getBoundingClientRect();
          const baseLx = (card.parentElement?.offsetLeft ?? 0) + card.offsetLeft;
          const baseLy = rect.height / 2 + 40;

          const lx = baseLx + (frame.i === activeRef.current ? x : 0);
          const ly = baseLy + (frame.i === activeRef.current ? y : 0);

          return {mx, my, lx, ly, c: 0};
        })
    );
  };

  return (
      <TechStackContext.Provider value={{
        dragOffsetRef,
        controllers,
        cards,
        activeRef,
        drawsRef,
        draws,
        calculateDraws,
        active,
        setActive,
        data: profile.stack.tech,
        keys,
        frames,
        pathRef,
      }}>
        {props.children}
      </TechStackContext.Provider>
  );
}