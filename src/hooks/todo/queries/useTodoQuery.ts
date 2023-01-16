import { getTodo } from "api/todo";
import { useQuery } from "react-query";
import { TodoType } from "types/todo";

const useTodoQuery = (id: string | undefined) => {
  return useQuery(["todo"], () => getTodo(id), {
    select: (data: { status: number; data: TodoType } | undefined) => {
      return data;
    }
  });
};

export default useTodoQuery;
