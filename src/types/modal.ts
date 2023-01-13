export interface BasicModalType {
  todoId: string;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PostModalType extends BasicModalType {
  modalType: string;
}
