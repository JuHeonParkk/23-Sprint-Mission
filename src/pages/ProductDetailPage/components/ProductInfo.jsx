import styled from "styled-components";
import LikeIcon from "@/assets/icon/like.svg";
import DefaultLikeIcon from "@/assets/icon/like_default.svg";
import KebabIcon from "@/assets/icon/kebab_icon.svg";
import Profile from "@/assets/common/profile.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }

  @media (min-width: 1200px) {
    gap: 24px;
  }
`;

const ProductImageContainer = styled.div`
  width: 343px;
  height: 343px;

  background-image: url(${(props) => props.images});
  background-size: cover;
  background-position: center;
  border-radius: 16px;

  @media (min-width: 1200px) {
    width: 486px;
    height: 486px;
  }
`;

const ProductInfoContainer = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    width: 690px;
  }
`;

const Line = styled.div`
  ${({ $isVertical }) =>
    $isVertical ? `width: 1px; height: 100%;` : `width: 100%; height: 1px;`}
  background-color: var(--secondary-200);
`;

const ProductNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  @media (min-width: 1200px) {
    margin-bottom: 16px;
  }
`;

const ProductName = styled.h1`
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  color: var(--secondary-800);

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 32px;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
  }
`;

const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--secondary-800);
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }

  @media (min-width: 1200px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

const ProductDescriptionContainer = styled.div`
  margin: 16px 0 24px 0;

  & p {
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    color: var(--secondary-800);

    @media (min-width: 1200px) {
      color: var(--secondary-600);
    }
  }
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: var(--secondary-600);
  margin-bottom: 8px;

  @media (min-width: 1200px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

const TagContainer = styled.div`
  display: flex;
`;

const Tag = styled.div`
  margin-right: 8px;
  padding: 5px 16px;
  font-size: 16px;
  color: var(--secondary-800);
  background-color: var(--secondary-100);
  border-radius: 26px;
`;

const OwnerInfoContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 40px;
  padding: 8px 0;
  display: flex;
  align-items: center;
  gap: 16px;

  @media (min-width: 1200px) {
    margin-top: 62px;
  }
`;

const OwnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  flex-grow: 1;
`;

const OwnerName = styled.p`
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  color: var(--secondary-600);
`;

const ProductCreatedAt = styled.p`
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: var(--secondary-400);
`;

const LikeButton = styled.button`
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: var(--bg-white);
  border: 1px solid var(--secondary-200);
  border-radius: 35px;
  font-size: 16px;
  font-weight: 500;
  color: var(--secondary-500);
`;

export default function ProductInfo({ productDetail }) {
  return (
    <Container>
      <ProductImageContainer images={productDetail.images} />
      <ProductInfoContainer>
        <ProductNameContainer>
          <ProductName>{productDetail.name}</ProductName>
          <img src={KebabIcon} />
        </ProductNameContainer>

        <ProductPrice>{productDetail.price}원</ProductPrice>
        <Line />
        <ProductDescriptionContainer>
          <Title>상품 소개</Title>
          <p>{productDetail.description}</p>
        </ProductDescriptionContainer>
        <div>
          <Title>상품 태그</Title>
          <TagContainer>
            {productDetail.tags.map((tag) => (
              <Tag key={tag}>#{tag}</Tag>
            ))}
          </TagContainer>
        </div>
        <OwnerInfoContainer>
          <img src={Profile} alt="사용자 프로필" />
          <OwnerInfo>
            <OwnerName>{productDetail.ownerNickname}</OwnerName>
            <ProductCreatedAt>
              {new Date(productDetail.createdAt).toLocaleDateString()}
            </ProductCreatedAt>
          </OwnerInfo>
          <Line $isVertical />
          <LikeButton>
            <img src={productDetail.isFavorite ? LikeIcon : DefaultLikeIcon} />
            <span>{productDetail.favoriteCount}</span>
          </LikeButton>
        </OwnerInfoContainer>
      </ProductInfoContainer>
    </Container>
  );
}
