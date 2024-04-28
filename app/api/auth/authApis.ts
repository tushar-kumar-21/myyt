import { LoginUserProps, RegisterUserProps } from '@/app/interfaces/apiInterfaces/apiInterface';
import createApiInstance from '../config';
import { AuthEndPoints } from '../endpoints';

const api = createApiInstance();

const registerUser = async (data: RegisterUserProps["payload"]) => {
    try {
        const response = await api.post(AuthEndPoints.REGISTER, data)
        return response;
    } catch (error) {
    }
}

const loginUser = async (data: LoginUserProps["payload"]) => {
    try {
        const response = await api.post(AuthEndPoints.LOGIN, data)
        return response;
    } catch (error) {
    }
}

export const authApis = {
    registerUser,
    loginUser
}