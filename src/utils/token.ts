const LOCALSTORAGE_TOKEN_KEY = "token";

export const getUserToken = () => {
  const userToken = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  return userToken || "";
};

export const setUserToken = (token: string) =>
  localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, token);

export const removeUserToken = () =>
  localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
