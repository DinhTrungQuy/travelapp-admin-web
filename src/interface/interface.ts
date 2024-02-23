export interface User {
  username: string;
  password: string;
  fullname: string;
  email: string;
  phone: string;
  role: string;
}
export interface Response {
  data: User | undefined;
  description: string;
  status: number;
}
export interface AuthSlice {
  user: string | null;
  loading: boolean;
  error: string | null;
}
