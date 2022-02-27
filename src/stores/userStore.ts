import create from 'zustand';

interface UserStore {
  user: {
    userName: string;
  } | null;
  login: (userName: string) => void;
  logout: () => void;
  isLoginOpen: boolean;
  setIsLoginOpen: (value: boolean) => void;
}

const useUserStore = create<UserStore>(set => ({
  user: null,
  login: userName => set({ user: { userName: userName } }),
  logout: () => set({ user: null }),
  isLoginOpen: false,
  setIsLoginOpen: value => set({ isLoginOpen: value }),
}));

export default useUserStore;
