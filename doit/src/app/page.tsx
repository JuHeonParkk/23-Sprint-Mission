import Button from "@/components/common/Button";
import Header from "@/components/common/Header";
import SearchInput from "@/components/common/SearchInput";
import PlusIcon from "./assets/icons/PlusIcon";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-between gap-4">
        <SearchInput className="flex-1" placeholder="할 일을 입력해주세요" />
        <Button
          variant="rect"
          style={{ backgroundColor: "var(--color-slate-200)" }}
        >
          <PlusIcon size="16" color="var(--color-slate-900)" />
          <span>추가하기</span>
        </Button>
      </div>
    </>
  );
}
