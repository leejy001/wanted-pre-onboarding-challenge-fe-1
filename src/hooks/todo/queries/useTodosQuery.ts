import { getTodos } from "api/todo";
import { useQuery } from "react-query";
import { TodoType } from "types/todo";

const useTodosQuery = () => {
  return useQuery(["todos"], getTodos, {
    select: (data: { status: number; data: TodoType[] } | undefined) => {
      return data;
    }
  });
};

export default useTodosQuery;
