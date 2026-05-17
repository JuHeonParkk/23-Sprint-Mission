import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: string;
  color?: string;
}

export const CheckActiveIcon = ({ size, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <circle cx="12" cy="12" r="12" fill="#7c3aed" />
      <path
        stroke="#fefce8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M7 12.5l3.5 3.5L17 8.5"
      />
    </svg>
  );
};
