import { removeTodo } from "api/todo";
import { useMutation, useQueryClient } from "react-query";
import { setToggleType } from "types/modal";
import { Toast } from "util/toast";

const useModfiyTodoMutation = ({ setToggle }: setToggleType) => {
  const queryClient = useQueryClient();

  return useMutation(removeTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      setToggle(false);
      Toast("error", "삭제 완료!!!");
    }
  });
};

export default useModfiyTodoMutation;
