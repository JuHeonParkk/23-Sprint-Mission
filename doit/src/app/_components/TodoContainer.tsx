"use client";

import { useState } from "react";
import type { ItemProps } from "@/types/item";
import SearchForm from "./SearchForm";
import TodoList from "./TodoList";
import { updateItem } from "@/lib/api/item";

interface TodoContainerProps {
  initialItems: ItemProps[];
}

export default function TodoContainer({ initialItems }: TodoContainerProps) {
  const [items, setItems] = useState<ItemProps[]>(initialItems);

  const handleAddItem = (newItem: ItemProps) => {
    setItems((prev) => [newItem, ...prev]);
  };

  const handleToggle = async (id: number) => {
    const target = items.find((item) => item.id === id);
    if (!target) return;

    // 낙관적 업데이트
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
      ),
    );

    try {
      await updateItem(id, { isCompleted: !target.isCompleted });
    } catch {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, isCompleted: target.isCompleted } : item,
        ),
      );
    }
  };

  return (
    <>
      <SearchForm onAddItem={handleAddItem} />
      <TodoList items={items} onToggle={handleToggle} />
    </>
  );
}
