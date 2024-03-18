import { get_sign_in_api } from '../api/authApi';
import { useAuthStore } from '../stores/useAuthStore';
import { usePost } from './api-hooks'

function useAuth() {
    const { setToken } = useAuthStore();
    const { mutate: signInMutation } = usePost(get_sign_in_api(), undefined, (data) => {
        setToken(data);
    });

    const signIn = (data) => {
        const { username, password } = data;

        const body = {
            "username": username,
            "password": password
        }

        signInMutation(body);
    }

    return { signIn };
}

export default useAuth;