import { useAuthStore } from '../stores/useAuthStore';
import useSocketStore from '../stores/useSocketStore';

const useSocket = () => {
    const { socket } = useSocketStore();
    const { token } = useAuthStore()
    const { account_id } = token;

    const registerId = () => {
        socket.emit("add-user", account_id);
    }

    const subscribeStateChange = () => {
        socket.on("send-noti-to-delivery", (args) => {
            console.log("pu ca chi")
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