export interface ItemProps {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface GetItemRequest {
  page?: number;
  pageSize?: number;
}

export interface CreateItemRequest {
  name?: string;
}

export interface ItemResponse {
  id: number;
  tenantId: string;
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}

export interface UpdateItemRequest {
  name?: string;
  memo?: string;
  imageUrl?: string;
  isCompleted?: boolean;
}
