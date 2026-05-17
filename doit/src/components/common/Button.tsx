import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "rect" | "circle";
  color?: string;
  textColor?: string;
}

export default function Button({
  variant = "rect",
  color,
  textColor,
  children,
  ...props
}: ButtonProps) {
  const baseStyle =
    "flex items-center justify-center gap-2 transition-all  border-[var(--color-slate-900)] border-2 rounded-full active:translate-x-[4px] active:translate-y-[4px] active:shadow-none";

  const variants = {
    rect: "px-8 py-4",
    circle: "w-14 h-14",
  };

  const buttonShadow = "shadow-[6px_6px_var(--color-slate-900)]";

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${buttonShadow} className`}
      style={{
        backgroundColor: color,
        color: textColor,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
