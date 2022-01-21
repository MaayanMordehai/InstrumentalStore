import { config } from "../config/config"
import axios from "axios";

const login = (email: String, password: String) => {
    return axios.post(`${config.apiUrl}/auth/login`, { email, password })
        .then((response) => {
            localStorage.setItem('user', JSON.stringify(response.data));
            console.log(response.data);
            return response.data;
        })
        .catch((error: Error) => {
            throw new Error("Incorrect email and/or password, " + error.message);
        })
}

const logout = () => {
    localStorage.removeItem('user');
}

export const userService = {
    login,
    logout
};
