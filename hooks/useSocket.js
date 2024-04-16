import { useAuthStore } from '../stores/useAuthStore';
import useSocketStore from '../stores/useSocketStore';
import { useDeliveryStore } from '../stores/useDeliveryStore'

const useSocket = () => {
    const { socket } = useSocketStore();
    const { token } = useAuthStore()
    const { setCurrentState } = useDeliveryStore();

    const registerId = () => {
        const { account_id } = token;
        socket.emit("add-user", account_id);
    }

    const subscribeStateChange = () => {
        socket.on("send-noti-to-delivery", (args) => {
            console.log(args);
            // setCurrentState(args);
        })
    }

    const subscribeCheckRegister = () => {
        socket.on("checkRegister", (args) => {
            console.log(args)
        })
    }

    return {
        registerId,
        subscribeStateChange,
        subscribeCheckRegister
    };
}

export default useSocket