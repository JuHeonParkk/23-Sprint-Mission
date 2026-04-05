import LikeIcon from "@/assets/icon/like.svg";
import DefaultLikeIcon from "@/assets/icon/like_default.svg";

export default function ProductInfo({ productId, productDetail }) {
  return (
    <div>
      <div>
        <img src={productDetail.images} alt="상품이미지" />
      </div>
      <div>
        <p>{productDetail.name}</p>
        <p>{productDetail.price}</p>
        <div>{productDetail.price}</div>
        <div>
          <p>상품 소개</p>
          <p>{productDetail.description}</p>
        </div>
        <div>
          <p>상품 태그</p>
          <div>
            {productDetail.tags.map((tag) => (
              <div>
                <span>#{tag}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img />
          <div>
            <p>{productDetail.ownerNickname}</p>
            <p>{productDetail.createdAt.toISOString}</p>
          </div>
          <button>
            <img src={productDetail.isFavorite ? LikeIcon : DefaultLikeIcon} />
            <span>{productDetail.favoriteCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
