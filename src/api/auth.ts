import axios from "axios";
import { SignInFormType } from "types/sign";

export const signin = (data: SignInFormType) => {
  return axios.post(process.env.REACT_APP_BASIC_URL + "/users/login", data);
};

export const signup = (data: SignInFormType) => {
  return axios.post(process.env.REACT_APP_BASIC_URL + "/users/create", data);
};
