"use client";

import { FormEvent, useState } from "react";
import { createItem } from "@/lib/api/item";
import type { ItemProps } from "@/types/item";

import Button from "@/components/common/Button";
import SearchInput from "@/components/common/SearchInput";

import PlusIcon from "@/assets/icons/PlusIcon";

interface SearchFormProps {
  onAddItem: (item: ItemProps) => void;
}

export default function SearchForm({ onAddItem }: SearchFormProps) {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim() || isLoading) return;

    try {
      setIsLoading(true);

      const newItem = await createItem({ name: value });
      onAddItem(newItem);
      setValue("");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between gap-4 pb-10"
    >
      <SearchInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1"
        placeholder="할 일을 입력해주세요"
      />
      <Button
        variant="rect"
        style={{ backgroundColor: "var(--color-slate-200)" }}
        disabled={isLoading}
      >
        <PlusIcon size="16" color="var(--color-slate-900)" />
        <span>추가하기</span>
      </Button>
    </form>
  );
}
