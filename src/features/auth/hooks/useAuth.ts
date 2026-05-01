import { useState } from 'react';
import { RequestStatusType } from '../../../types';
import useAuthStore from '../store';
import { User } from '../store/types';
import { AuthRequestState, UseAuthResult } from './useAuth.types';

const useAuth = (): UseAuthResult => {
  const { user, setUser } = useAuthStore();

  const [state, setState] = useState<AuthRequestState>({
    status: RequestStatusType.IDLE
  });

  const login = async (data: { email: string; password: string }) => {
    setState({ status: RequestStatusType.LOADING });

    try {
      await new Promise((res) => setTimeout(res, 800));

      const fakeUser: User = {
        id: '1',
        email: data.email
      };

      setUser(fakeUser);

      setState({
        status: RequestStatusType.SUCCESS,
        data: fakeUser
      });
    } catch (error) {
      setState({
        status: RequestStatusType.ERROR,
        error: error
      });
    }
  };

  const logout = () => {
    setUser(null);
    setState({ status: RequestStatusType.IDLE });
  };

  return {
    user,
    state,
    login,
    logout
  };
};

export default useAuth;
