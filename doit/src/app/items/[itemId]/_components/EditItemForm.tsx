"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import type { ItemResponse } from "@/types/item";
import { deleteItem, updateItem } from "@/lib/api/item";

import CloseIcon from "@/assets/icons/CloseIcon";
import CheckIcon from "@/assets/icons/CheckIcon";
import Button from "@/components/common/Button";
import ItemImageInput from "./ItemImageInput";
import TodoItemInput from "./TodoItemInput";
import MemoTextarea from "./MemoTextarea";

interface EditItemFormProps {
  item: ItemResponse;
}

const EditItemForm = ({ item }: EditItemFormProps) => {
  const router = useRouter();
  const [name, setName] = useState(item.name);
  const [memo, setMemo] = useState(item.memo ?? "");
  const [imageUrl, setImageUrl] = useState(item.imageUrl ?? "");
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(item.isCompleted);

  const isSubmitDisabled =
    isImageUploading ||
    !(
      name !== item.name ||
      memo !== (item.memo ?? "") ||
      imageUrl !== (item.imageUrl ?? "") ||
      isCompleted !== item.isCompleted
    );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitDisabled) return;
    try {
      await updateItem(item.id, {
        name,
        memo,
        imageUrl,
        isCompleted,
      });

      router.push("/");
      router.refresh();
    } catch {
      alert("수정 실패");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteItem(item.id);

      router.push("/");
      router.refresh();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TodoItemInput
        todoName={name}
        isCompleted={isCompleted}
        onTodoNameChange={setName}
        onToggle={() => setIsCompleted((prev) => !prev)}
      />

      <div className="w-full h-77.75 flex justify-between items-center gap-6 mt-6">
        <ItemImageInput
          defaultImage={imageUrl}
          onImageChange={setImageUrl}
          onUploadingChange={setIsImageUploading}
        />
        <MemoTextarea defaultMemo={memo} onMemoChange={setMemo} />
      </div>

      <div className="w-full flex justify-end items-center gap-4 mt-7">
        <Button
          type="submit"
          disabled={isSubmitDisabled}
          color="var(--lime-300)"
          textColor="var(--slate-900)"
        >
          <CheckIcon size="16" color="var(--slate-900)" />
          수정 완료
        </Button>
        <Button
          type="button"
          onClick={handleDelete}
          color="var(--rose-500)"
          textColor="var(--white)"
        >
          <CloseIcon size="16" color="var(--white)" />
          삭제하기
        </Button>
      </div>
    </form>
  );
};

export default EditItemForm;
