import { editTodo } from "api/todo";
import { useMutation, useQueryClient } from "react-query";
import { setToggleType } from "types/modal";
import { Toast } from "utils/toast";

const useModfiyTodoMutation = ({ setToggle }: setToggleType) => {
  const queryClient = useQueryClient();

  return useMutation(editTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
      setToggle(false);
      Toast("success", "수정 완료!!!");
    }
  });
};

export default useModfiyTodoMutation;
