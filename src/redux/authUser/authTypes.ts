export type AuthState = {
  user: {
    name: string | null;
    email: string | null;
  };
  token: string | null;
  isLoggedIn: boolean;
  isRefetching: boolean;
  authIsLoading: boolean;
  authError: string | null;
};

export type User = {
  name: string;
  email: string;
  password: string;
};

export type AuthResponse = {
  user: Omit<User, "password">;
  token: string;
};
