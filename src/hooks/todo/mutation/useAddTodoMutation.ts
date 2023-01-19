import { addTodo } from "api/todo";
import { useMutation, useQueryClient } from "react-query";
import { setToggleType } from "types/modal";
import { Toast } from "util/toast";

const useAddTodoMutation = ({ setToggle }: setToggleType) => {
  const queryClient = useQueryClient();

  return useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
      setToggle(false);
      Toast("success", "추가 완료!!!");
    }
  });
};

export default useAddTodoMutation;
