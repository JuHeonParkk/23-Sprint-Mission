import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import ProductInfo from "./components/ProductInfo";
import axios from "@/api/index.js";

export default function ProductDetailPage() {
  const [productDetail, setProductDetail] = useState({ images: [], tags: [] });
  const { id: productId } = useParams();

  useEffect(() => {
    const handleProductLoad = async () => {
      try {
        const response = await axios.get(`/products/${productId}`);
        console.log(response.data);
        setProductDetail(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    handleProductLoad();
  }, [productId]);

  return (
    <div>
      <Header />
      <ProductInfo productId={productId} productDetail={productDetail} />
    </div>
  );
}
