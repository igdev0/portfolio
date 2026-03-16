import {PropsWithChildren} from 'react';

export default function Container({children}: PropsWithChildren) {
  return (
      <div className="max-w-[1100] mx-auto px-4">
        {children}
      </div>
  );
}