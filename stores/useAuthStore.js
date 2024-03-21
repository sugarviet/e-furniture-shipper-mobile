import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const store = set => ({
  token: null,
  username: null,

  setToken: (token) => set({ token: token }),
  setUserName: (username) => set({ username: username }),
  clearToken: () => set({ token: null, username: null }),
})

export const useAuthStore = create(persist(store, { name: 'token-storage', storage: createJSONStorage(() => AsyncStorage) }))