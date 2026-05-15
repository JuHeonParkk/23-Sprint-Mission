import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: string;
  color?: string;
}

export const CheckActiveIcon = ({ size, color, ...props }: IconProps) => {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx="16" cy="16" r="16" fill="#7c3aed" />
    <path
      stroke="#fefce8"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="4"
      d="M8 16.286 13.818 22 24 12"
    />
  </svg>;
};
