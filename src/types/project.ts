export type ProjectStatus = "completed" | "in-progress" | "planned";

export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string;
  category: string;
  status: ProjectStatus;
};