import { apiInstance } from "./instance";
import {
  GetItemRequest,
  ItemProps,
  CreateItemRequest,
  CreateItemResponse,
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

export const createItem = async ({
  name,
}: CreateItemRequest): Promise<CreateItemResponse> => {
  const response = await apiInstance.post("/items", {
    name,
  });
  return response.data;
};

export const updateItem = async (
  itemId: number,
  body: UpdateItemRequest,
): Promise<CreateItemResponse> => {
  const response = await apiInstance.patch(`/items/${itemId}`, body);

  return response.data;
};
