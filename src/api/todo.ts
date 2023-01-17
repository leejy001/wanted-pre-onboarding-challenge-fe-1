import api from "./api";

export const getTodos = async () => {
  try {
    const response = await api.get("/todos");
    const result = {
      status: response.status,
      data: response.data?.data
    };
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getTodo = async (id: string | undefined) => {
  try {
    if (id) {
      const response = await api.get(`/todos/${id}`);
      const result = {
        status: response.status,
        data: response.data?.data
      };
      return result;
    }
    return;
  } catch (error) {
    console.log(error);
  }
};

export const addTodo = async (data: { title: string; content: string }) => {
  try {
    const response = await api.post("/todos", data);
    const result = {
      status: response.status,
      data: response.data?.data
    };
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const editTodo = async (data: {
  id: string;
  title: string;
  content: string;
}) => {
  const body = {
    title: data.title,
    content: data.content
  };
  try {
    const response = await api.put(`/todos/${data.id}`, body);
    const result = {
      status: response.status,
      data: response.data?.data
    };
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const removeTodo = async (id: string) => {
  try {
    const response = await api.delete(`/todos/${id}`);
    const result = {
      status: response.status,
      data: response.data?.data
    };
    return result;
  } catch (error) {
    console.log(error);
  }
};
