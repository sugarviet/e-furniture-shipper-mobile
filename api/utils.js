import axios from "axios";

const BASE_URL = "http://34.126.181.161:4646/api/v1";

export const API = axios.create({
    baseURL: BASE_URL,
});