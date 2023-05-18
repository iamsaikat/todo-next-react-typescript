export interface Todo {
  id: number;
  title: string;
  completed: boolean; 
}


export type AddTodo = (item: Todo) => void;
export type ClearCompletedTodos = () => void;
export type ToggleTodo = (id: number) => void;