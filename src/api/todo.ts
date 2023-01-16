import axios from "axios";

export const getTodos = async () => {
  const headers = {
    "Content-Type": "application/json",
    authorization: localStorage.getItem("token")
  };
  try {
    const response = await axios.get(
      process.env.REACT_APP_BASIC_URL + "/todos",
      { headers: headers }
    );
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
  const headers = {
    "Content-Type": "application/json",
    authorization: localStorage.getItem("token")
  };
  try {
    if (id) {
      const response = await axios.get(
        process.env.REACT_APP_BASIC_URL + `/todos/${id}`,
        { headers: headers }
      );
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
  const headers = {
    "Content-Type": "application/json",
    authorization: localStorage.getItem("token")
  };
  try {
    const response = await axios.post(
      process.env.REACT_APP_BASIC_URL + "/todos",
      data,
      { headers: headers }
    );
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
  const headers = {
    "Content-Type": "application/json",
    authorization: localStorage.getItem("token")
  };
  const body = {
    title: data.title,
    content: data.content
  };
  try {
    const response = await axios.put(
      process.env.REACT_APP_BASIC_URL + `/todos/${data.id}`,
      body,
      { headers: headers }
    );
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
  const headers = {
    "Content-Type": "application/json",
    authorization: localStorage.getItem("token")
  };
  try {
    const response = await axios.delete(
      process.env.REACT_APP_BASIC_URL + `/todos/${id}`,
      { headers: headers }
    );
    const result = {
      status: response.status,
      data: response.data?.data
    };
    return result;
  } catch (error) {
    console.log(error);
  }
};
