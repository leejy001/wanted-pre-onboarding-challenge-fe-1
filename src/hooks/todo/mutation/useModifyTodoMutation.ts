import { editTodo } from "api/todo";
import { useMutation, useQueryClient } from "react-query";
import { setToggleType } from "types/modal";

const useModfiyTodoMutation = ({ setToggle }: setToggleType) => {
  const queryClient = useQueryClient();

  return useMutation(editTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
      setToggle(false);
    }
  });
};

export default useModfiyTodoMutation;