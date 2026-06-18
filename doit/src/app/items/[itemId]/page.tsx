import { CheckActiveIcon } from "@/assets/icons/CheckActiveIcon";
import { CheckDefaultIcon } from "@/assets/icons/CheckDefaultIcon";
import Button from "@/components/common/Button";
import { getItem } from "@/lib/api/item";

interface ItemPageParams {
  params: Promise<{ itemId: number }>;
}

const ItemPage = async ({ params }: ItemPageParams) => {
  const { itemId } = await params;
  const item = await getItem(Number(itemId));

  return (
    <div>
      <div>
        <button>
          {item.isCompleted ? (
            <CheckActiveIcon size="32" />
          ) : (
            <CheckDefaultIcon size="32" />
          )}
        </button>
        {item.name}
      </div>

      <div>
        <input type="file" />
        <div>
          <input />
        </div>
      </div>

      <div>
        <Button>수정 완료</Button>
        <Button>삭제하기 </Button>
      </div>
    </div>
  );
};

export default ItemPage;
