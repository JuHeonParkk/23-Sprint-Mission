import React from "react";
import Header from "../components/Header";
import ProductTitle from "../components/ProductTitle";
import BestProducts from "../components/BestProducts";

export default function ProductsPage() {
  return (
    <div>
      <Header />
      <ProductTitle>베스트 상품</ProductTitle>
      <BestProducts />
      <ProductTitle>전체 상품</ProductTitle>
    </div>
  );
}
