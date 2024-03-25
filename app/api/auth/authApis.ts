import createApiInstance from '../config';
import { AuthEndPoints } from '../endpoints';

const api = createApiInstance();

const registerUser = async (data) => {
    try {
        const response = await api.post(AuthEndPoints.REGISTER,data) 
    } catch (error) {

    }
}