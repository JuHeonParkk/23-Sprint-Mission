import Button from "@/components/common/Button";
import { getItem } from "@/lib/api/item";
import CloseIcon from "@/assets/icons/CloseIcon";
import CheckIcon from "@/assets/icons/CheckIcon";
import ItemImageInput from "./_components/ItemImageInput";
import TodoItemInput from "./_components/TodoItemInput";

interface ItemPageParams {
  params: Promise<{ itemId: number }>;
}

const ItemPage = async ({ params }: ItemPageParams) => {
  const { itemId } = await params;
  const item = await getItem(Number(itemId));

  return (
    <div>
      <TodoItemInput todoName={item.name} isCompleted={item.isCompleted} />

      <div className="w-full h-77.75 flex justify-between items-center gap-6 mt-6">
        <ItemImageInput defaultImage={item.imageUrl} />
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
