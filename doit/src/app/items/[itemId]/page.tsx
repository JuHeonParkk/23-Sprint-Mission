import { getItem } from "@/lib/api/item";
import EditItemForm from "./_components/EditItemForm";

interface ItemPageParams {
  params: Promise<{ itemId: number }>;
}

const ItemPage = async ({ params }: ItemPageParams) => {
  const { itemId } = await params;
  const item = await getItem(Number(itemId));

  return <EditItemForm item={item} />;
};

export default ItemPage;
