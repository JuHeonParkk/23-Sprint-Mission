"use client";

import { FormEvent, useState, useEffect } from "react";
import type { ItemResponse } from "@/types/item";

import CloseIcon from "@/assets/icons/CloseIcon";
import CheckIcon from "@/assets/icons/CheckIcon";
import Button from "@/components/common/Button";
import ItemImageInput from "./ItemImageInput";
import TodoItemInput from "./TodoItemInput";
import MemoTextarea from "./MemoTextarea";
import { updateItem } from "@/lib/api/item";
import { useRouter } from "next/navigation";

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

    await updateItem(item.id, {
      name,
      memo,
      imageUrl,
      isCompleted,
    });

    router.push("/");
  };

  useEffect(() => {
    console.log("현재 imageUrl", imageUrl);
  }, [imageUrl]);

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
        <Button type="button" color="var(--rose-500)" textColor="var(--white)">
          <CloseIcon size="16" color="var(--white)" />
          삭제하기
        </Button>
      </div>
    </form>
  );
};

export default EditItemForm;
