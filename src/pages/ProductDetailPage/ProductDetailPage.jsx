import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import ProductDetail from "./components/ProductDetail";
import { getProductById } from "@/api/product";
import { getReview } from "@/api/comment";

export default function ProductDetailPage() {
  const [productDetail, setProductDetail] = useState({ images: [], tags: [] });
  const [reviews, setReviews] = useState([]);
  const { id: productId } = useParams();

  useEffect(() => {
    const handleProductLoad = async () => {
      try {
        const data = await getProductById(productId);
        setProductDetail(data);
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    };

    const handleReviewLoad = async () => {
      try {
        const data = await getReview(productId);
        const { list } = data;
        if (!list) return;
        setReviews(list);
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    };
    handleProductLoad();
    handleReviewLoad();
  }, [productId]);

  return (
    <div>
      <Header />
      <ProductDetail
        productDetail={productDetail}
        reviews={reviews}
        setReviews={setReviews}
      />
    </div>
  );
}
