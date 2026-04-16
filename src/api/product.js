import instance from "./instance";

// 상품 조회
export const getProducts = async () => {
  const response = await instance.get("/products", {
    params: {
      page: 1,
      pageSize: 10,
      orderBy: "recent",
      keyword: "",
    },
  });
  return response.data;
};

// 상품 등록
export const createProduct = async (productData) => {
  const response = await instance.post("/products", productData);
  return response.data;
};

// 개별 상품 조회
export const getProductById = async (productId) => {
  const response = await instance.get(`/products/${productId}`);
  return response.data;
};

// 상품 수정
export const updateProduct = async (productId, updatedData) => {
  const response = await instance.patch(`/products/${productId}`, updatedData);
  return response.data;
};

// 상품 삭제
export const deleteProduct = async (productId) => {
  const response = await instance.delete(`/products/${productId}`);
  return response.data;
};

// 상품 좋아요 등록
export const addLikeProduct = async (productId) => {
  const response = await instance.post(`products/${productId}/favorite`);
  return response.data;
};

// 상품 좋아요 취소
export const deleteLikeProduct = async (productId) => {
  const response = await instance.delete(`products/${productId}/favorite`);
  return response.data;
};
