import {useContext} from 'react';
import {TechStackContext} from '@/components/lib/tech-stack/context';
import Statement from '@/components/lib/statement';

export default function TechStackCards() {
  const {frames, cards} = useContext(TechStackContext);
  return (

      <div className="stack-cards">
        {
          frames.map((frame, index) => (
                  <div
                      className="stack-card"
                      ref={ref => {
                        if (ref) {
                          cards.current[index] = ref;
                        }
                      }} key={frame.key}
                      data-order={index}>
                    <Statement>
                      Hello
                    </Statement>
                  </div>
              )
          )
        }
      </div>
  )
}