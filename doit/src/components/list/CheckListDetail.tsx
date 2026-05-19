import { CheckActiveIcon } from "@/app/assets/icons/CheckActiveIcon";
import { CheckDefaultIcon } from "@/app/assets/icons/CheckDefaultIcon";

interface CheckListDetailProps {
  isDone: boolean;
  todo: string;
}

export default function CheckListDetail({
  isDone,
  todo,
}: CheckListDetailProps) {
  const baseStyle =
    "w-full px-4 py-3 flex items-center justify-start gap-[12px] rounded-full border-(--color-slate-900) border-2 color-(--color-slate-800) underline";

  const listStyle = isDone
    ? "bg-(--color-violet-100)"
    : "bg-(--color-background)";

  return (
    <div className={`${baseStyle} ${listStyle}`}>
      {isDone ? <CheckActiveIcon size="32" /> : <CheckDefaultIcon size="32" />}

      <span>{todo}</span>
    </div>
  );
}
