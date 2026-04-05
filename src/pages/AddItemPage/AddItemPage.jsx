import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Button from "@/components/Button";

import FormField from "./components/FormField";
import FileInput from "./components/FileInput";
import Tag from "./components/Tag";

const FormContainer = styled.form`
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

const Textarea = styled.textarea`
  width: 100%;
  height: 282px;
  padding: 15px 24px;
  background-color: var(--secondary-100);
  border: none;
  border-radius: 12px;
  font-size: 16px;
  color: var(--secondary-800);
  font-family: inherit;

  &:focus,
  &:active {
    outline: 1px solid var(--primary-100);
  }

  &::placeholder {
    font-size: 16px;
    color: var(--secondary-400);
  }
`;

export default function AddItemPage() {
  const [productName, setProductName] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [productTags, setProductTags] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isButtonActive) return;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = productTags.trim();

      if (tags.includes(value)) return;

      setTags([...tags, value]);
      setProductTags("");
    }
  };

  const handleTagDelete = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (productName && productInfo && productPrice && tags.length > 0) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [productName, productInfo, productPrice, tags]);

  return (
    <div>
      <Header />
      <FormContainer onSubmit={handleSubmit}>
        <AddItemHeader>
          <h1>상품 등록하기</h1>
          <Button
            type="submit"
            disabled={!isButtonActive}
            onClick={handleSubmit}
          >
            등록
          </Button>
        </AddItemHeader>
        <FormField title="상품 이미지">
          <FileInput />
        </FormField>
        <FormField title="상품명">
          <Input
            type="text"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="상품명을 입력해주세요"
          />
        </FormField>
        <FormField title="상품 소개">
          <Textarea
            type="text"
            name="productInfo"
            value={productInfo}
            onChange={(e) => setProductInfo(e.target.value)}
            placeholder="상품 소개를 입력해주세요"
          />
        </FormField>
        <FormField title="판매가격">
          <Input
            type="number"
            name="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="판매가격을 입력해주세요"
          />
        </FormField>
        <FormField title="태그">
          <Input
            value={productTags}
            name="productTags"
            placeholder="태그를 입력해주세요"
            onChange={(e) => setProductTags(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Tag tags={tags} onDelete={handleTagDelete} />
        </FormField>
      </FormContainer>
    </div>
  );
}
