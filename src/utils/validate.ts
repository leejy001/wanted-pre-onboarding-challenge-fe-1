export const isEmailValidate = (email: string) => {
  const regEmail =
    /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  return regEmail.test(email);
};

export const isPasswordValidate = (password: string) => {
  const regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;
  return regPassword.test(password);
};
