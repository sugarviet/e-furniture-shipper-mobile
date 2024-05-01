import { showMessage } from "react-native-flash-message";

function useNotification() {
    const success_message = (message) => showMessage({ message: message, type: 'success' });
    const error_message = (message) => showMessage({ message: message, type: 'danger' });
    return { success_message, error_message };
}

export default useNotification;