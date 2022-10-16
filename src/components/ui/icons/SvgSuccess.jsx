import React from "react";

export default function SvgSuccess() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_582)">
        <circle cx="50" cy="50" r="48.5" fill="white" />
        <circle
          cx="50"
          cy="50"
          r="48.5"
          fill="url(#paint0_linear_1_582)"
          fillOpacity="0.25"
        />
        <circle cx="50" cy="50" r="48.5" stroke="white" strokeWidth="3" />
        <path
          d="M35.9998 52.3077L46.3022 60L64.5712 40"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1_582"
          x1="50"
          y1="0"
          x2="50"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_1_582">
          <rect width="100" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
