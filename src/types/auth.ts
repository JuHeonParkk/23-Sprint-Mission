export interface AuthBaseFiled {
  email: string;
  password: string;
}

export interface SignupProps extends AuthBaseFiled {
  nickname: string;
  passwordConfirm: string;
}

export interface LoginFormProps {
  onSubmit: () => void;
  isLoading: boolean;
}

export interface SignupFormProps {
  onSubmit: () => void;
  isLoading: boolean;
}
