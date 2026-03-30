import Header from "@/components/Header";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function AddItemPage() {
  return (
    <div>
      <Header />
      <div>
        <h1>상품 등록하기</h1>
        <Button>등록</Button>
      </div>
      <div>
        <h2>상품 이미지</h2>
      </div>
      <div>
        <h2>상품명</h2>
        <Input />
      </div>
      <div>
        <h2>상품 소개</h2>
        <textarea />
      </div>
      <div>
        <h2>판매가격</h2>
        <Input type="number" />
      </div>
      <div>
        <h2>태그</h2>
        <Input />
      </div>
    </div>
  );
}
