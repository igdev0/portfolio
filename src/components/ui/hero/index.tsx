import clsx from 'clsx';
import Button from '@/components/ui/button';

// {/*<TextType*/}
// {/*    text={["Building Workflows", "Creating AI Agents", "Designing Splendid UIs"]}*/}
// {/*    typingSpeed={75}*/}
// {/*    pauseDuration={1500}*/}
// {/*    className={titleCls}*/}
// {/*    showCursor*/}
// {/*    cursorCharacter="_"*/}
// {/*    deletingSpeed={50}*/}
// {/*    cursorBlinkDuration={0.5}*/}
// {/*/>*/}
const titleCls = clsx("text-white text-4xl lg:text-6xl leading-15 lg:leading-20 font-bold");
export default function Hero() {
  return (
      <div
          className="relative mx-auto gap-4 rounded-2xl mt-40 lg:mt-60 mb-90 py-10 grid w-full grid-cols-2">
        <div>
          <div className="w-full mb-10">
            <h1 className={titleCls}>Software Developer</h1>
            <p className="text-white font-semibold mt-10">
              Passionated software developer, meticulously curious with a
              keen eye for user experience.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline">View Work</Button>
            <Button>Lets chat</Button>
          </div>
        </div>
        <div className="h-[300] w-full bg-gray-200">

        </div>
      </div>
  );
}