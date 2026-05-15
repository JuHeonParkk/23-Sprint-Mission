import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: string;
  color?: string;
}

export default function PlusIcon({ size, color, ...props }: IconProps) {
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
        stroke-width="2"
        d="M2 8h12M8 14V2"
      />
    </svg>
  );
}
