interface MemoTextareaProps {
  defaultMemo?: string;
  onMemoChange: (value: string) => void;
}

const MemoTextarea = ({ defaultMemo, onMemoChange }: MemoTextareaProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4 w-full h-77.75 bg-[url('/memo.svg')] bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden">
      <span className="text-16-extrabold text-amber-800 mt-2">Memo</span>
      <textarea
        value={defaultMemo}
        onChange={(e) => onMemoChange(e.target.value)}
        className="w-full h-full bg-transparent resize-none outline-none"
      />
    </div>
  );
};

export default MemoTextarea;
