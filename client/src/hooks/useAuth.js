import { useContext } from "react";


import { login, register } from "../api/auth-api";
import { useAuthContext } from "../contexts/AuthContext";


export const useLogin = () => {
    const { changeAuthState } = useAuthContext();


    const loginHandler = async (email, password) => {
        const result = await login(email, password)

        changeAuthState(result);

        return result;
    }

    return loginHandler;
};

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const result = await register(email, password); // Връща целия резултат от сървъра

        // Задайте състоянието с резултата (например: { _id, email, accessToken })
        changeAuthState(result);

        return result; // Върнете резултата
    };

    return registerHandler;
}