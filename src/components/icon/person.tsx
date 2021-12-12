import * as React from "react"

function Person(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 113.67 127.04"
      {...props}
    >
      <path d="M60.07 0c1.61.59 3.35.57 5 1.06C77.38 4.67 85.48 12.59 88.78 25c4.64 17.54-6.29 35.49-24.06 40A33 33 0 0141.05 4.08 32.18 32.18 0 0152.99.25c.22 0 .51.08.63-.24h1a.32.32 0 00.5 0h3.47a.32.32 0 00.5 0z" />
      <path d="M55.11 0c-.17.29-.33.34-.5 0z" fill="#676767" />
      <path d="M59.08 0c-.17.33-.33.28-.5 0z" fill="#666" />
      <path d="M57.02 127c-14.73-.12-27.82-4.32-39.38-12.92a65.24 65.24 0 01-17-18.66 3.27 3.27 0 01-.3-3.29C6.09 80.06 15.4 72.32 28.39 69.07c1-.25 2-.39 3-.6a6.58 6.58 0 015.34 1.34 34.27 34.27 0 0021.82 6.29c6.06-.27 11.89-1.74 16.76-5.32 3.66-2.69 7.18-2.55 11.09-1.47a41.52 41.52 0 0125.26 19.41 38.77 38.77 0 011.75 3.54 2.51 2.51 0 01-.26 2.58c-9.33 15-22.33 25.2-39.47 29.91A65.92 65.92 0 0157.02 127z" />
    </svg>
  )
}

export default Person