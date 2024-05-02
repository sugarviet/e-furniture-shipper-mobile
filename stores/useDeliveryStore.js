import { showMessage } from 'react-native-flash-message'
import { create } from 'zustand'

const store = set => ({
    currentState: 1,

    setCurrentState: (state) => {
        showMessage({ message: "Delivery state has been updated", type: 'success' })
        set({ currentState: state })
    }
})

export const useDeliveryStore = create(store)