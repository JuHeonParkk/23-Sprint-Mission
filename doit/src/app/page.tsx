import { getItems, ItemProps } from "@/lib/api/item";
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

  return (
    <div className="bg-var(--color-background) py-6 sm:px-4 md:px-6 xl:px-90">
      <TodoContainer initialItems={initialItems} />
    </div>
  );
}
