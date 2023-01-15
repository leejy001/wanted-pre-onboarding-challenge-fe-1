export interface SignInFormType {
  email: string;
  password: string;
}

export interface SignUpFormType {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignInputType {
  inputTitle: string;
  inputName: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  errorMessage: string;
}

export interface SignSuccessType {
  message: string;
  token: string;
}
