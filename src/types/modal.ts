export interface BasicModalType {
  todoId?: string;
  isClose: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PostModalType extends BasicModalType {
  modalType: string;
}

export interface setToggleType {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
