import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import AllProductSection from "../components/AllProductSection";
import BestProductSection from "../components/BestProductSection";
import axios from "../api/index.js";

const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0 24px;
    margin-top: 24px;
  }

  @media (min-width: 1200px) {
    padding: 0 200px;
  }
`;

const ProductTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-900);
  margin-top: 24px;
  margin-bottom: 16px;
`;

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("favoriteCount"); // 정렬 기준 상태

  const handleLoad = async () => {
    let data = null;
    try {
      const response = await axios.get(`/products`);
      data = response.data;
      console.log("응답 상태:", data);
    } catch (err) {
      console.error(err);
    }
    const { list } = data;
    console.log("productsList:", list);
    if (!list) return;
    setProducts(list);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const sortedProducts = [...products].sort((a, b) => b[order] - a[order]); // 좋아요순으로

  return (
    <div>
      <Header />
      <BestProductSection sortedProducts={sortedProducts} />
      {/* <AllProductSection /> */}
    </div>
  );
}
