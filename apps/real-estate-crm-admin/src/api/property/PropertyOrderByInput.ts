import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
  address?: SortOrder;
  description?: SortOrder;
  agentId?: SortOrder;
};
