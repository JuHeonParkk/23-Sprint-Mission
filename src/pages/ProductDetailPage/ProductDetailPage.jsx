import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import ProductDetail from "./components/ProductDetail";
import { getProduct } from "@/api/product";

export default function ProductDetailPage() {
  const [productDetail, setProductDetail] = useState({ images: [], tags: [] });
  const [reviews, setReviews] = useState([]);
  const { id: productId } = useParams();

  useEffect(() => {
    const handleProductLoad = async () => {
      try {
        const data = await getProduct(productId);
        setProductDetail(data);
      } catch (error) {
        console.error(error);
      }
    };

    const handleReviewLoad = async () => {
      try {
        const response = await axios.get(`/products/${productId}/comments`, {
          params: {
            productId,
            limit: 3,
            cursor: 0,
          },
        });
        const { list } = response.data;
        if (!list) return;
        setReviews(list);
      } catch (error) {
        console.error(error);
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
