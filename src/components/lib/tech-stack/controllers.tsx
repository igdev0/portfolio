import {useContext} from 'react';
import {TechStackContext} from '@/components/lib/tech-stack/context';
import Button from '@/components/lib/button';

export default function TechStackControllers() {
  const {frames, active, controllers, setActive} = useContext(TechStackContext);

  const handleButtonClick = (index: number) => {
    return () => {
      setActive(index);
    };
  };
  return (

      <div className="stack-controllers">
        {frames.map((item, index) => (
            <Button active={active === index} disabled={active === index} ref={(el) => {
              if (el) {
                controllers.current[index] = el;
              }
            }} onClick={handleButtonClick(index)} variant="secondary" key={item.key}>{item.key}</Button>))}
      </div>
  )
}