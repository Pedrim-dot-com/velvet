import { RequestState } from '../../../types';
import { User } from '../store/types';

export type AuthRequestState = RequestState<User>;

export interface UseAuthResult {
  user: User | null;
  state: AuthRequestState;
  login: (data: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}
