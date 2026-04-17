import type { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  color?: "orange" | "white";
  size?: number;
}

export default function Logo({
  color = "white",
  size = 32,
  className,
  ...props
}: LogoProps) {
  const c = color === "orange" ? "#e8500a" : "#ffffff";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Outer arc — large C-shape opening bottom-right */}
      <path
        d="M 85,25 A 50,50 0 1 0 25,85"
        stroke={c}
        strokeWidth="9"
        strokeLinecap="round"
      />
      {/* Middle arc */}
      <path
        d="M 77,35 A 33,33 0 1 0 35,77"
        stroke={c}
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Inner arc */}
      <path
        d="M 68,47 A 16,16 0 1 0 47,68"
        stroke={c}
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* Filled quarter-disc (upper-right) */}
      <path
        d="M 50,15 A 35,35 0 0 1 85,50 L 50,50 Z"
        fill={c}
      />
    </svg>
  );
}
