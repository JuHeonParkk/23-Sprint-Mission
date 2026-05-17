import SearchForm from "./_components/SearchForm";
import TodoList from "./_components/TodoList";

export default function Home() {
  return (
    <div className="bg-var(--color-background) py-6 sm:px-4 md:px-6 xl:px-90">
      <SearchForm />
      <TodoList />
    </div>
  );
}
