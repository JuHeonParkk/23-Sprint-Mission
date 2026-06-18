import { apiInstance } from "./instance";

export interface ItemProps {
  id: number;
  name: string;
  isCompleted: boolean;
}

interface GetItemRequest {
  page?: number;
  pageSize?: number;
}

interface CreateItemRequest {
  name?: string;
}

export interface CreateItemProps {
  id: number;
  tenantId: string;
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}

export interface UpdateItemParams {
  name?: string;
  memo?: string;
  imageUrl?: string;
  isCompleted?: boolean;
}

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
}: CreateItemRequest): Promise<CreateItemProps> => {
  const response = await apiInstance.post("/items", {
    name,
  });
  return response.data;
};

export const updateItem = async (
  itemId: number,
  body: UpdateItemParams,
): Promise<CreateItemProps> => {
  const response = await apiInstance.patch(`/items/${itemId}`, body);

  return response.data;
};
