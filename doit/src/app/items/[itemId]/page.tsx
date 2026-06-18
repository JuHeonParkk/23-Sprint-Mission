import { CheckActiveIcon } from "@/assets/icons/CheckActiveIcon";
import { CheckDefaultIcon } from "@/assets/icons/CheckDefaultIcon";
import Button from "@/components/common/Button";
import { getItem } from "@/lib/api/item";
import CloseIcon from "@/assets/icons/CloseIcon";
import CheckIcon from "@/assets/icons/CheckIcon";
import Placeholder from "@/assets/images/placeholderImg.svg";
import Image from "next/image";
import EditIcon from "@/assets/icons/EditIcon";
import PlusIcon from "@/assets/icons/PlusIcon";

interface ItemPageParams {
  params: Promise<{ itemId: number }>;
}

const ItemPage = async ({ params }: ItemPageParams) => {
  const { itemId } = await params;
  const item = await getItem(Number(itemId));

  const handleImageChange = () => {};

  return (
    <div>
      <div className="w-full flex justify-center items-center gap-4 h-16 bg-white border-2 border-slate-900 rounded-3xl text-18-bold text-slate-900 underline">
        <button>
          {item.isCompleted ? (
            <CheckActiveIcon size="32" />
          ) : (
            <CheckDefaultIcon size="32" />
          )}
        </button>
        {item.name}
      </div>

      <div className="w-full h-77.75 flex justify-between items-center gap-6 mt-6">
        <label
          htmlFor="image"
          className="relative w-full h-77.75 cursor-pointer"
        >
          {item.imageUrl ? (
            <>
              <Image
                src={item.imageUrl}
                alt="아이템 이미지"
                fill
                className="object-cover"
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

        <div className="flex flex-col justify-center items-center gap-4 p-4 w-full h-77.75 bg-[url('/memo.svg')] bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden">
          <span className="text-16-extrabold text-amber-800 mt-2">Memo</span>
          <textarea
            defaultValue={item.memo}
            className="w-full h-full bg-transparent resize-none outline-none"
          />
        </div>
      </div>

      <div className="w-full flex justify-end items-center gap-4 mt-7">
        <Button color="var(--lime-300)" textColor="var(--slate-900)">
          <CheckIcon size="16" color="var(--slate-900)" />
          수정 완료
        </Button>
        <Button color="var(--rose-500)" textColor="var(--white)">
          <CloseIcon size="16" color="var(--white)" />
          삭제하기
        </Button>
      </div>
    </div>
  );
};

export default ItemPage;
