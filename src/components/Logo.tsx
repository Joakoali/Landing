interface LogoProps {
  color?: "orange" | "white";
  size?: number;
  className?: string;
}

export default function Logo({ color = "white", size = 32, className }: LogoProps) {
  const src = color === "orange" ? "/ixtal-logo-orange.svg" : "/ixtal-logo-white.svg";
  return (
    <img
      src={src}
      width={size}
      height={size}
      className={className}
      alt=""
      aria-hidden="true"
    />
  );
}
