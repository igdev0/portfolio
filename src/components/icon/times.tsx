import { SVGProps } from "react"

const Times = (props: SVGProps<SVGSVGElement>) => (
    <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50.2 50.2"
        {...props}
    >
      <path style={{pointerEvents: "none"}} d="M30.75 25.1 50.2 44.55l-5.65 5.65L25.1 30.75 5.65 50.2 0 44.55 19.45 25.1 0 5.65 5.65 0 25.1 19.45 44.55 0l5.65 5.65L30.75 25.1z" />
    </svg>
)

export default Times
