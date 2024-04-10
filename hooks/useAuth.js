import { jwtDecode } from 'jwt-decode';
import { get_sign_in_api, get_sign_out_api } from '../api/authApi';
import { useAuthStore } from '../stores/useAuthStore';
import { usePost, usePostAuth } from './api-hooks'
import { decode } from "base-64";

global.atob = decode;

function useAuth() {
    const { setToken, setUserName, clearToken } = useAuthStore();

    const { mutate: signInMutation } = usePost(get_sign_in_api(), undefined, (data) => {
        const { access_token, refresh_token } = data;
        const decode = jwtDecode(access_token);
        const { account_id, username } = decode;

        setToken({ access_token, refresh_token, account_id });
        setUserName(username);
    });

    const { mutate: signOutMutation } = usePostAuth(get_sign_out_api(), undefined, () => {
        clearToken();
    }, (error) => { alert(error.message) });

    const signIn = (data) => {
        const { username, password } = data;

        const body = {
            "username": username,
            "password": password
        }

        signInMutation(body);
    }

    const signOut = () => {
        signOutMutation();
    }

    return { signIn, signOut };
}

export default useAuth;