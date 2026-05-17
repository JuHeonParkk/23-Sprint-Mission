import { InputHTMLAttributes } from "react";

export default function SearchInput({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  const baseStyle =
    " bg-[var(--color-slate-100)] border-[var(--color-slate-900)] text-[var(--color-slate-900)] border-2 rounded-full px-8 py-4 outline-none placeholder-[var(--color-slate-500)]";
  const buttonShadow = "shadow-[6px_6px_var(--slate-900)]";

  return (
    <input className={`${baseStyle} ${buttonShadow} ${className}`} {...props} />
  );
}
