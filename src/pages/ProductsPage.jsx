import React from "react";
import Header from "../components/Header";
import BestProducts from "../components/BestProducts";
import AllProducts from "../components/AllProducts";

export default function ProductsPage() {
  return (
    <div>
      <Header />
      <BestProducts />
      <AllProducts />
    </div>
  );
}
