import { CheckActiveIcon } from "@/assets/icons/CheckActiveIcon";
import { CheckDefaultIcon } from "@/assets/icons/CheckDefaultIcon";

interface TodoItemInputProps {
  todoName: string;
  isCompleted: boolean;
  onTodoNameChange: (value: string) => void;
  onToggle: () => void;
}

const TodoItemInput = ({
  todoName,
  isCompleted,
  onTodoNameChange,
  onToggle,
}: TodoItemInputProps) => {
  return (
    <div
      className={`w-full pl-10 flex justify-center items-center gap-4 h-16 rounded-3xl text-18-bold ${
        isCompleted
          ? "border-2 border-slate-900 bg-violet-200 text-slate-900"
          : "border-2 border-slate-900 bg-white text-slate-900"
      }`}
    >
      <button type="button" onClick={onToggle}>
        {isCompleted ? (
          <CheckActiveIcon size="32" />
        ) : (
          <CheckDefaultIcon size="32" />
        )}
      </button>
      <input
        type="text"
        value={todoName}
        onChange={(e) => onTodoNameChange(e.target.value)}
        className="outline-none bg-transparent"
      />
    </div>
  );
};

export default TodoItemInput;
