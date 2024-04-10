import { create } from 'zustand'

const store = set => ({
    currentState: 1,

    setCurrentState: (state) => set({ currentState: state })
})

export const useDeliveryStore = create(store)