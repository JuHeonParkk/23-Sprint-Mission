"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { createImageUrl } from "@/lib/api/item";

import Placeholder from "@/assets/images/placeholderImg.svg";
import EditIcon from "@/assets/icons/EditIcon";
import PlusIcon from "@/assets/icons/PlusIcon";

interface ItemImageInputProps {
  defaultImage?: string;
  onImageChange: (imageUrl: string) => void;
}

const ItemImageInput = ({
  defaultImage,
  onImageChange,
}: ItemImageInputProps) => {
  const [previewImage, setPreviewImage] = useState(defaultImage);
  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const previewImage = URL.createObjectURL(file);
    setPreviewImage(previewImage);

    const result = await createImageUrl(file);
    setPreviewImage(result.url);
    onImageChange(result.url);
  };

  return (
    <>
      <label htmlFor="image" className="relative w-full h-77.75 cursor-pointer">
        {previewImage ? (
          <>
            <Image
              src={previewImage}
              alt="아이템 이미지"
              fill
              className="object-cover rounded-3xl"
            />
            <div className="absolute w-16 h-16 flex items-center justify-center rounded-full bg-slate-200 bottom-4 right-4">
              <EditIcon size="24" color="var(--slate-500)" />
            </div>
          </>
        ) : (
          <>
            <div className="w-full h-full flex items-center justify-center bg-slate-100 border-2 border-slate-300 rounded-3xl border-dashed">
              <Image
                src={Placeholder}
                alt="아이템 이미지"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div className="absolute w-16 h-16 flex items-center justify-center rounded-full bg-slate-200 bottom-4 right-4">
              <PlusIcon size="24" color="var(--slate-500)" />
            </div>
          </>
        )}
      </label>

      <input
        id="image"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </>
  );
};

export default ItemImageInput;
