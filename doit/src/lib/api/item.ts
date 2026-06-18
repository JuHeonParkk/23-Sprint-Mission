import { apiInstance } from "./instance";
import {
  GetItemRequest,
  ItemProps,
  CreateItemRequest,
  ItemResponse,
  UpdateItemRequest,
} from "@/types/item";

export const getItems = async ({
  page = 1,
  pageSize = 10,
}: GetItemRequest): Promise<ItemProps[]> => {
  const response = await apiInstance.get("/items", {
    params: {
      page,
      pageSize,
    },
  });
  return response.data;
};

export const getItem = async (itemId: number): Promise<ItemResponse> => {
  const response = await apiInstance.get(`/items/${itemId}`);

  return response.data;
};

export const createItem = async ({
  name,
}: CreateItemRequest): Promise<ItemResponse> => {
  const response = await apiInstance.post("/items", {
    name,
  });
  return response.data;
};

export const updateItem = async (
  itemId: number,
  body: UpdateItemRequest,
): Promise<ItemResponse> => {
  const response = await apiInstance.patch(`/items/${itemId}`, body);

  return response.data;
};

export const createImageUrl = async (image: File) => {
  const formData = new FormData();

  formData.append("image", image);

  const response = await apiInstance.post("images/upload", formData);

  return response.data;
};
