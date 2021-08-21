export type ProjectCreateInput = {
  comment?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  name: string;
  owner: string;
  startDate?: Date | null;
};
