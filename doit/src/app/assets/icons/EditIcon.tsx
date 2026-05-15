import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: string;
  color?: string;
}

export default function EditIcon({ size, color, ...props }: IconProps) {
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
        fill={color}
        d="M13.31 3.866a1 1 0 0 1 1.366-.366l3.372 1.947a1 1 0 0 1 .366 1.366l-7.23 12.524a1 1 0 0 1-.492.427l-3.57 1.44a.5.5 0 0 1-.683-.399l-.489-3.782a1 1 0 0 1 .126-.628z"
      />
    </svg>
  );
}
