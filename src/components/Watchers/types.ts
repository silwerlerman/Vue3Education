export type toDo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
} | null;

export type asyncVoidFunc = Promise<void>;
