import clsx from 'clsx';
import TextType from '@/components/lib/TextType';
import Button from '@/components/ui/button';

const titleCls = clsx("text-white text-5xl lg:text-7xl leading-15 lg:leading-20");
export default function Hero() {
  return (
      <div className="relative max-w-[1100] mx-auto gap-4">
        <div className="flex flex-col justify-center items-center mt-60">
          <div className="w-full text-center mb-4">
            <h1 className={titleCls}>I'm a software Developer</h1>
            <TextType
                text={["Building Workflows", "Creating AI Agents", "Designing Splendid UIs"]}
                typingSpeed={75}
                pauseDuration={1500}
                className={titleCls}
                showCursor
                cursorCharacter="_"
                deletingSpeed={50}
                cursorBlinkDuration={0.5}
            />
          </div>
          <div className="flex gap-4">
            <Button variant="outline">View Work</Button>
            <Button>Lets chat</Button>
          </div>
        </div>
      </div>
  );
}