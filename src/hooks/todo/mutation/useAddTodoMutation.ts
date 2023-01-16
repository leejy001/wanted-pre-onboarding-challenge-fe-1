import { addTodo } from "api/todo";
import { useMutation, useQueryClient } from "react-query";
import { setToggleType } from "types/modal";

const useAddTodoMutation = ({ setToggle }: setToggleType) => {
  const queryClient = useQueryClient();

  return useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
      setToggle(false);
    }
  });
};

export default useAddTodoMutation;
