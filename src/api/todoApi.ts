import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  Authorization: sessionStorage.getItem("token"),
};

export const getTodos = async () => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BASIC_URL + "/todos",
      { headers: headers }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getTodo = async (id: string | undefined) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BASIC_URL + `/todos/${id}`,
      { headers: headers }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addTodo = async (data: { title: string; content: string }) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BASIC_URL + "/todos",
      data,
      { headers: headers }
    );
    return response;
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
    content: data.content,
  };
  try {
    const response = await axios.put(
      process.env.REACT_APP_BASIC_URL + `/todos/${data.id}`,
      body,
      { headers: headers }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const removeTodo = async (id: string) => {
  try {
    const response = await axios.delete(
      process.env.REACT_APP_BASIC_URL + `/todos/${id}`,
      { headers: headers }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
