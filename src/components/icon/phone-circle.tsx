import * as React from "react"

function PhoneCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="prefix__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 116 116"
      {...props}
    >
      <defs>
        <style>{".prefix__cls-2{fill:#fefefe}"}</style>
      </defs>
      <circle cx={58} cy={58} r={58} fill="#dfdfdf" />
      <path
        d="M247.66 276.89a7.27 7.27 0 01-3.56-1.89 6.54 6.54 0 01-1.64-4.61v-40-30.14a6.06 6.06 0 014.45-6.22 7.14 7.14 0 012-.24h34.19a6.09 6.09 0 016.45 6.46v70.26a6.2 6.2 0 01-5.09 6.38s-.08.06-.12.1z"
        transform="translate(-208.03 -177.29)"
      />
      <path
        className="prefix__cls-2"
        d="M285 230.81v26c0 .7-.15.88-.87.88h-36.31c-.73 0-.88-.18-.88-.88v-52.08c0-.68.17-.83.84-.83h36.39c.66 0 .83.15.83.83v26.08zM265.94 200.3h-8c-1 0-1.39-.41-1.37-1.45 0-.83.21-1.5 1.34-1.49h16.16c1 0 1.34.41 1.34 1.47s-.39 1.45-1.39 1.45zM266.05 270.89a3.85 3.85 0 110-7.69 3.85 3.85 0 110 7.69z"
        transform="translate(-208.03 -177.29)"
      />
    </svg>
  )
}

export default PhoneCircle
