import { SVGProps } from "react"

const Burger = (props: SVGProps<SVGSVGElement>) => (
    <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48.55 36.04"
        {...props}
    >
        <path style={{pointerEvents: "none"}} d="M0 0h48.13v8H0zM.42 14.04h48.13v8H.42zM.42 28.04h48.13v8H.42z" />
    </svg>
)

export default Burger
