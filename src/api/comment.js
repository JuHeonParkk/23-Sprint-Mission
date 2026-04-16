import instance from "./instance";

// 상품 리뷰 조회
export const getReview = async (productId) => {
  const response = await instance.get(`/products/${productId}/comments`, {
    params: {
      productId,
      limit: 3,
      cursor: 0,
    },
  });
  return response.data;
};

// 상품 리뷰 등록
export const createReview = async (productId, reviewData) => {
  const response = await instance.post(
    `/products/${productId}/comments`,
    reviewData,
  );
  return response.data;
};

// 리뷰 수정
export const updateComment = async (commentId, updateComment) => {
  const response = await instance.patch(
    `/comments/${commentId}`,
    updateComment,
  );
  return response.data;
};

// 리뷰 삭제
export const deleteComment = async (commentId) => {
  const response = await instance.delete(`/comments/${commentId}`);
  return response.data;
};
