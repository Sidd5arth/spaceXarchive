import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: Boolean(localStorage.getItem("isAuthenticated")),
  login: (email, password) => {
    if (email === "user@gmail.com" && password === "password") {
      localStorage.setItem("isAuthenticated", "true");
      set({ isAuthenticated: true });
      return true;
    }
    return false;
  },
  logout: () => {
    localStorage.removeItem("isAuthenticated");
    set({ isAuthenticated: false });
  },
}));

export default useAuthStore;
