import {createContext, PropsWithChildren, RefObject, useMemo, useRef, useState} from 'react';
import {profile} from '@/content/profile';
import {calcFrames} from '@/components/lib/tech-stack/utils';

export interface TechStackContext {
  active: number;
  data: typeof profile.stack.skills;
  keys: (keyof typeof profile.stack.skills)[];
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
  data: profile.stack.skills,
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

export function TechStackProvider(props: PropsWithChildren & Record<"data", typeof profile.stack.skills>) {
  const [active, setActive] = useState(0);
  const [draws, setDraws] = useState<PathData[]>([]);
  const cards = useRef<HTMLDivElement[]>([]);
  const drawsRef = useRef<PathData[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const dragOffsetRef = useRef<{ x: number; y: number }>({x: 0, y: 0});
  const controllers = useRef<HTMLButtonElement[]>([]);
  const rafRef = useRef<number | null>(null);
  const activeRef = useRef(active);
  const keys = Object.keys(profile.stack.skills) as TechStackContext['keys'];

  const frames = useMemo<FrameRef[]>(() => {
    return calcFrames(active, keys as string[]);
  }, [active]);

  const calculateDraws = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const {x, y} = dragOffsetRef.current;

      const nextDraws = frames.map((frame) => {
        const controller = controllers.current[frame.i];
        const card = cards.current[frame.i];
        const border = 2;

        if (!controller || !card) {
          return {mx: 0, my: 0, lx: 0, ly: 0, c: 0};
        }

        const cardParent = card.offsetParent as HTMLElement | null;

        const mx = controller.offsetLeft + controller.clientWidth + border;
        const my = controller.offsetTop + controller.clientHeight / 2;

        const baseLx =
            (cardParent?.offsetLeft ?? 0) +
            card.offsetLeft;

        const baseLy =
            (cardParent?.offsetTop ?? 0) +
            card.offsetTop +
            card.clientHeight / 2;

        const lx = baseLx + (frame.i === activeRef.current ? x : 0);
        const ly = baseLy + (frame.i === activeRef.current ? y : 0);

        return {mx, my, lx, ly, c: 0};
      });

      setDraws(nextDraws);
    });
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
        data: profile.stack.skills,
        keys,
        frames,
        pathRef,
      }}>
        {props.children}
      </TechStackContext.Provider>
  );
}