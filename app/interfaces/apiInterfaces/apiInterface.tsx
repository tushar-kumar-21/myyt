export interface RegisterUserProps {
    type: string;
    payload: {
        username: string;
        fullname: string;
        email: string;
        password: string;
    }
}

export interface LoginUserProps {
    type: string;
    payload: {
        email: string;
        password: string;
    }
}