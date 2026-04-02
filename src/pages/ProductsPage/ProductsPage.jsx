import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import AllProductSection from "./components/AllProductSection";
import BestProductSection from "./components/BestProductSection";
import axios from "@/api/index";
import useDevice from "@/hooks/useDevice";

export default function ProductsPage() {
  const [bestProducts, setBestProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0); // 전체 상품 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [order, setOrder] = useState("recent"); // 정렬 기준 상태

  let LIMIT = 10;
  const device = useDevice();

  if (device === "mobile") LIMIT = 4;
  else if (device === "tablet") LIMIT = 6;
  else LIMIT = 10;

  // 베스트 상품을 가져오는 함수
  const handleBestProductsLoad = async () => {
    try {
      const response = await axios.get(`/products`, {
        params: {
          page: 1,
          pageSize: LIMIT,
          orderBy: "favorite",
        },
      });
      const { list } = response.data;
      if (!list) return;
      setBestProducts(list);
    } catch (err) {
      console.error(err);
    }
  };

  // 전체 상품을 가져오는 함수
  const handleAllProductsLoad = async (orderParams, pageParams) => {
    try {
      const response = await axios.get(`/products`, {
        params: {
          page: pageParams,
          pageSize: LIMIT,
          orderBy: orderParams, // 정렬 기준을 쿼리 파라미터로 전달
        },
      });
      const { list, totalCount } = response.data;

      if (!list) return;

      setAllProducts(list);
      setTotalCount(totalCount);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleBestProductsLoad();
  }, []);

  useEffect(() => {
    handleAllProductsLoad(order, currentPage);
  }, [order, currentPage, device]);

  return (
    <div>
      <Header />
      <BestProductSection products={bestProducts} />
      <AllProductSection
        products={allProducts}
        order={order}
        setOrder={setOrder}
        totalCount={totalCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={LIMIT}
      />
    </div>
  );
}
