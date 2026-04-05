import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import like from "@/assets/icon/like.svg";
import placeholderImage from "@/assets/placeholderImage.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 6px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 16px;
`;

const ProductTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-800);
`;

const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: var(--primary-800);
`;

const LikeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const LikeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LikeCount = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: var(--secondary-600);
`;

export default function ProductCard({
  product: { id, images, name, price, favoriteCount },
}) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/items/${id}`)}>
      <ProductImg
        src={images && images.length > 0 ? images[0] : placeholderImage}
        alt={name}
      />
      <ProductTitle>{name}</ProductTitle>
      <ProductPrice>{price.toLocaleString()}원</ProductPrice>
      <LikeContainer>
        <LikeButton>
          <img src={like} alt="like" />
        </LikeButton>
        <LikeCount>{favoriteCount.toLocaleString()}</LikeCount>
      </LikeContainer>
    </Container>
  );
}
