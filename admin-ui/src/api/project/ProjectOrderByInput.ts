import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
