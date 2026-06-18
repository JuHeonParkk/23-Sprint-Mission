import Image from "next/image";
import type { ItemProps } from "@/types/item";

import CheckList from "@/app/_components/CheckList";

import LabelTodo from "@/app/assets/images/label_todo.svg";
import LabelDone from "@/app/assets/images/label_done.svg";
import EmptyTodoImage from "@/app/assets/images/empty_todo.svg";
import EmptyDoneImage from "@/app/assets/images/empty_done.svg";

interface TodoItemListProps {
  items: ItemProps[];
  onToggle: (id: number) => void;
}

export default function TodoList({ items, onToggle }: TodoItemListProps) {
  const todoItems = items?.filter((item) => !item.isCompleted);
  const doneItems = items?.filter((item) => item.isCompleted);

  const listStyle = "flex flex-col items-start justify-center gap-4 pt-3";
  const emptyListStyle =
    "flex flex-col h-full w-full justify-center items-center gap-2 py-10 text-center text-16-bold text-(--color-slate-400)";

  return (
    <div className="flex items-start justify-between gap-6">
      <div className="w-full h-full">
        <Image src={LabelTodo} alt="라벨" width={101} height={36} />
        <div className={`${listStyle}`}>
          {todoItems?.length === 0 ? (
            <div className={`${emptyListStyle}`}>
              <Image
                src={EmptyTodoImage}
                alt="빈 리스트"
                width={240}
                height={240}
                className="mb-2"
              />
              <span>할일이 없어요.</span>
              <span>Todo를 새롭게 추가해주세요!</span>
            </div>
          ) : (
            todoItems?.map((item) => (
              <CheckList
                key={item.id}
                itemId={item.id}
                todo={item.name}
                isDone={item.isCompleted}
                onToggle={() => onToggle(item.id)}
              />
            ))
          )}
        </div>
      </div>
      <div className="w-full h-full">
        <Image src={LabelDone} alt="라벨" width={101} height={36} />
        <div className={`${listStyle}`}>
          {doneItems?.length === 0 ? (
            <div className={`${emptyListStyle}`}>
              <Image
                src={EmptyDoneImage}
                alt="빈 리스트"
                width={240}
                height={240}
                className="mb-2"
              />
              <span>아직 다 한 일이 없어요.</span>
              <span>해야 할 일을 체크해보세요!</span>
            </div>
          ) : (
            doneItems?.map((item) => (
              <CheckList
                key={item.id}
                itemId={item.id}
                todo={item.name}
                isDone={item.isCompleted}
                onToggle={() => onToggle(item.id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
