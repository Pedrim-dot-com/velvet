import { RequestState } from '../../../types';

export type User = {
  id: string;
  email: string;
};

export type AuthStoreState = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export type AuthState = RequestState<User>;
