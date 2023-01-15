import axios from "axios";
import { SignInFormType } from "types/sign";

export const signin = async (data: SignInFormType) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BASIC_URL + "/users/login",
      data
    );
    const result = {
      status: response.status,
      data: response.data
    };
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (data: SignInFormType) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BASIC_URL + "/users/create",
      data
    );
    const result = {
      status: response.status,
      data: response.data
    };
    return result;
  } catch (error) {
    console.log(error);
  }
};
