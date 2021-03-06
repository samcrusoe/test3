import { User } from "../user/User";
import { Project } from "../project/Project";

export type Task = {
  assignedTo?: User | null;
  createdAt: Date;
  estimationDays: number | null;
  id: string;
  project?: Project | null;
  startDate: Date | null;
  status?: "Pending" | "Ongoing" | "New" | "Done";
  title: string;
  updatedAt: Date;
};
