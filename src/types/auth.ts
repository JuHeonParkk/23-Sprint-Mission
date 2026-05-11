export interface AuthBaseField {
  email: string;
  password: string;
}

export interface SignupProps extends AuthBaseField {
  nickname: string;
  passwordConfirm: string;
}
