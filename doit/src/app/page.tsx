import { getItems } from "@/lib/api/item";
import type { ItemProps } from "@/types/item";
import TodoContainer from "./_components/TodoContainer";

export default async function Home() {
  let initialItems: ItemProps[] = [];

  try {
    initialItems = await getItems({ page: 1, pageSize: 10 });
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  }

  return <TodoContainer initialItems={initialItems} />;
}
