import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import closeIcon from "@/assets/icon/closeIcon.svg";
import plusIcon from "@/assets/icon/plusIcon.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 1200px) {
    gap: 24px;
  }
`;

const FileInputContainer = styled.div`
  width: 168px;
  height: 168px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border-radius: 12px;
  background-color: var(--secondary-200);

  cursor: pointer;

  @media (min-width: 1200px) {
    width: 282px;
    height: 282px;
  }

  & p {
    color: #9ca3af;
  }
`;

const PreviewContainer = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  border: 1px solid var(--secondary-50);
  border-radius: 12px;

  @media (min-width: 1200px) {
    width: 282px;
    height: 282px;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
`;

export default function FileInput() {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState(null);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const nextFile = e.target.files[0]; // 파일이 선택되지 않은 경우
    setFile(nextFile);
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleDelete = () => {
    setFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <Container>
      <FileInputContainer onClick={handleClick}>
        <img src={plusIcon} alt="이미지 등록 아이콘" />
        <p>이미지 등록</p>
      </FileInputContainer>
      <input type="file" ref={inputRef} onChange={handleChange} hidden />
      {preview && (
        <PreviewContainer>
          <img src={preview} alt="상품 이미지" />
          <DeleteButton type="button" onClick={handleDelete}>
            <img src={closeIcon} alt="삭제" />
          </DeleteButton>
        </PreviewContainer>
      )}
    </Container>
  );
}
