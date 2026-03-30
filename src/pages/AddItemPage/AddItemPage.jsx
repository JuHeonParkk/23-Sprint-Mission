import styled from "styled-components";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Button from "@/components/Button";

import FormField from "./components/FormField";
import FileInput from "./components/FileInput";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: 768px) {
    padding: 0 24px;
    margin-top: 24px;
  }

  @media (min-width: 1200px) {
    padding: 0 200px;
  }
`;

const AddItemHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;

  & h1 {
    font-size: 20px;
    font-weight: 700;
  }
`;

export default function AddItemPage() {
  return (
    <div>
      <Header />
      <Container>
        <AddItemHeader>
          <h1>상품 등록하기</h1>
          <Button>등록</Button>
        </AddItemHeader>
        <FormField title="상품 이미지">
          <FileInput />
        </FormField>
        <FormField title="상품명">
          <Input placeholder="상품명을 입력해주세요" />
        </FormField>
        <FormField title="상품 소개">
          <textarea placeholder="상품 소개를 입력해주세요" />
        </FormField>
        <FormField title="판매가격">
          <Input placeholder="판매가격을 입력해주세요" />
        </FormField>
        <FormField title="태그">
          <Input placeholder="태그를 입력해주세요" />
        </FormField>
      </Container>
    </div>
  );
}
