"use client";

import { useState } from "react";
import type { ItemProps } from "@/lib/api/item";
import SearchForm from "./SearchForm";
import TodoList from "./TodoList";

interface TodoContainerProps {
  initialItems: ItemProps[];
}

export default function TodoContainer({ initialItems }: TodoContainerProps) {
  const [items, setItems] = useState<ItemProps[]>(initialItems);

  const handleAddItem = (newItem: ItemProps) => {
    setItems((prev) => [newItem, ...prev]);
  };

  const handleToggle = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
      ),
    );
  };

  return (
    <>
      <SearchForm onAddItem={handleAddItem} />
      <TodoList items={items} onToggle={handleToggle} />
    </>
  );
}
