export interface TodoType {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface TodoItemType {
  item: TodoType;
  detailToggle: (event: React.MouseEvent, arg1: string) => void;
  editToggle: (event: React.MouseEvent, arg1: string) => void;
  removeToggle: (event: React.MouseEvent, arg1: string) => void;
}
