import axios from "axios";
import { getUserToken, removeUserToken } from "utils/token";

const baseURL = process.env.REACT_APP_BASIC_URL;

const api = axios.create({ baseURL });

api.interceptors.request.use(
  function (config) {
    const token = getUserToken();
    if (token) {
      config.headers = {
        "Content-type": "application/json",
        authorization: `${token}`
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      error.response?.status === 400 &&
      error.response?.data.details === "Token is missing"
    ) {
      removeUserToken();
      alert("세션이 만료되었습니다. 다시 로그인 해주세요");
      window.open("/auth/sign-in", "_self");
    }
    return Promise.reject(error);
  }
);

export default api;
