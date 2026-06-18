import Link from "next/link";
import { CheckActiveIcon } from "@/assets/icons/CheckActiveIcon";
import { CheckDefaultIcon } from "@/assets/icons/CheckDefaultIcon";

interface CheckListProps {
  itemId: number;
  isDone: boolean;
  todo: string;
  onToggle: () => void;
}

export default function CheckList({
  itemId,
  isDone,
  todo,
  onToggle,
}: CheckListProps) {
  const baseStyle =
    "w-full px-4 py-3 flex items-center justify-start gap-[12px] rounded-full border-(--color-slate-900) border-2 color-(--color-slate-800) cursor-pointer text-16-regular select-none transition-all active:scale-[0.99]";

  const listStyle = isDone
    ? "bg-(--color-violet-100) line-through hover:brightness-95"
    : "bg-(--color-background) hover:bg-(--color-foreground)/5";

  return (
    <Link href={`/items/${itemId}`} className={`${baseStyle} ${listStyle}`}>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onToggle();
        }}
        className="cursor-pointer"
      >
        {isDone ? (
          <CheckActiveIcon size="32" />
        ) : (
          <CheckDefaultIcon size="32" />
        )}
      </button>

      <span>{todo}</span>
    </Link>
  );
}
