export interface SignInErrorType {
  email: boolean;
  password: boolean;
  signIn: boolean;
}

export interface SignUpErrorType {
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
  signUp: boolean;
}
