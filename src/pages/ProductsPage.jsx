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
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [order, setOrder] = useState("createdAt"); // 정렬 기준 상태

  const LIMIT = 10;

  const handleLoad = async (orderParams, pageParams) => {
    try {
      const response = await axios.get(`/products`, {
        params: {
          order: orderParams, // 정렬 기준을 쿼리 파라미터로 전달
          page: pageParams,
          limit: LIMIT, // 페이지당 상품 수
        },
      });
      const { list, totalCount } = response.data;

      if (!list) return;

      setProducts(list);
      setTotalCount(totalCount);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleLoad(order, currentPage);
  }, [order, currentPage]);

  // const sortedProducts = [...products].sort((a, b) => b[order] - a[order]); // 좋아요순으로

  return (
    <div>
      <Header />
      <BestProductSection products={products} />
      <AllProductSection
        products={products}
        order={order}
        setOrder={setOrder}
        totalCount={totalCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
