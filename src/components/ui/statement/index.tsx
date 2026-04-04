import {PropsWithChildren} from 'react';

interface Props extends PropsWithChildren {

}

export default function Statement(props: Props) {
  return (
      <div className="border-l-4 pl-4 border-gray-200 mb-4 mt-4">
        <p>
          {props.children}
        </p>
      </div>
  );
}