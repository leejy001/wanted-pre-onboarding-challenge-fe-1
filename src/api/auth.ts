import axios from "axios";

export const signin = async (data: any) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BASIC_URL + "/users/login",
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (data: any) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BASIC_URL + "/users/create",
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
