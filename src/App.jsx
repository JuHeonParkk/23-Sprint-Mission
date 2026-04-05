import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "@/pages/MainPage/MainPage";
import LoginPage from "@/pages/Anth/LoginPage";
import SignupPage from "@/pages/Anth/SignupPage";
import ProductsPage from "@/pages/ProductsPage/ProductsPage";
import AddItemPage from "@/pages/AddItemPage/AddItemPage";
import ProductDetailPage from "@/pages/ProductDetailPage/ProductDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/additem" element={<AddItemPage />} />
      <Route path="/items" element={<ProductsPage />} />
      <Route path="/items/:id" element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;
