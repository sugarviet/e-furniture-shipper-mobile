import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  token: true,
  setToken: (token) => set({ token }),
  removeToken: () => set({ token: null }),
}))