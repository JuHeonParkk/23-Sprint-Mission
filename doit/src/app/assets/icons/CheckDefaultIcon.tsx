import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: string;
  color?: string;
}

export const CheckDefaultIcon = ({
  size = "24",
  color,
  ...props
}: IconProps) => {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle
      cx="16"
      cy="16"
      r="15"
      fill="#fefce8"
      stroke="#0f172a"
      stroke-width="2"
    />
  </svg>;
};
