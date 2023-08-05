export type Note = {
  id: number;
  name: string;
  content: string;
  dateOfCreation: string;
  category: "Task" | "Random Thought" | "Idea" | string;
  status: "active" | "archived";
};
