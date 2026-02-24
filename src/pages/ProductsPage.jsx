import React from "react";
import Header from "../components/Header";
import BestProductSection from "../components/BestProductSection";
import AllProductSection from "../components/AllProductSection";

export default function ProductsPage() {
  return (
    <div>
      <Header />
      <BestProductSection />
      <AllProductSection />
    </div>
  );
}
