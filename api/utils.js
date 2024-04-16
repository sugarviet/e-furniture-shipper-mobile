import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const BASE_URL = "https://dream-editor.tech/api/v1";

export const API = axios.create({
    baseURL: BASE_URL,
});

const getAsyncStorageState = async () => {
    return await AsyncStorage.getItem("token-storage").then((data) =>
        JSON.parse(data)
    ).then(data => data.state);
}

export const USER_API = axios.create({
    baseURL: BASE_URL,
});

USER_API.interceptors.request.use(
    async (config) => {
        const token = await getAsyncStorageState();

        const { access_token, refresh_token, account_id } = token.token;

        config.headers["x-client-accesstoken"] = access_token;
        config.headers["x-client-refreshtoken"] = refresh_token;
        config.headers["x-client-id"] = account_id;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);