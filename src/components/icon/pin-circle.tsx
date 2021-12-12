import {SVGProps} from "react";

function PinCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 116 116"
      {...props}
    >
      <circle cx={58} cy={58} r={58} fill="#dfdfdf" />
      <path d="M83.42 43.85C80.61 32.6 72.13 25.66 60.71 24.24a1 1 0 01-.79 0h-2.38a.51.51 0 01-.53 0h-.66c-22.93 3.28-28.81 27.19-16.41 44.87 1.87 3.26 16.9 25 19.77 22.28C71.3 78.89 87.1 62.28 83.42 43.85zM58.77 61.26c-15.33-.1-15.23-23.28.06-23.27 15.15.33 15.17 22.98-.06 23.27z" />
    </svg>
  )
}

export default PinCircle
