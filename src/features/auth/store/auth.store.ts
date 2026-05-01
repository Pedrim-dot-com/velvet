import { create } from 'zustand';
import { AuthStoreState } from './types';

const useAuthStore = create<AuthStoreState>((set) => ({
  user: null,
  setUser: (user) => set({ user })
}));

export default useAuthStore;
