import Galaxy from '@/components/lib/Galaxy';
import {PropsWithChildren} from 'react';

export default function Hero({children}: PropsWithChildren) {
  return (
      <main className="h-auto w-full">
        <div className="h-[650] w-full absolute top-0 left-0 bg-gray-900">
          <Galaxy/>
        </div>
        <div className="relative max-w-[1200] mx-auto gap-4 h-full ">
          {children}
        </div>
      </main>
  );
}