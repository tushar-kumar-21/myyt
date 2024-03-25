import * as yup from 'yup';

export const registerUserSchema = yup.object().shape({
    username: yup.string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters')
        .max(20, 'Username must be at most 15 characters'),

    fullname: yup.string()
        .required('Fullname is required')
        .min(3, 'Fullname must be at least 3 characters')
        .max(20, 'Fullname must be at most 15 characters'),

    email: yup.string()
        .required('Email is required')
        .email('Invalid email'),
        
    password: yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),

})