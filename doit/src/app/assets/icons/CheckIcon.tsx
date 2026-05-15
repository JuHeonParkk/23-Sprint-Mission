import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: string;
  color?: string;
}

export default function CheckIcon({ size, color, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m2 7 4.5 4.5L14 4"
      />
    </svg>
  );
}
