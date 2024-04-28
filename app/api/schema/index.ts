import * as yup from 'yup';

export const registerUserSchema = yup.object().shape({
    username: yup.string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters')
        .max(30, 'Username must be at most 15 characters'),

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

export const loginSchema = yup.object().shape({
    usernameOrEmail: yup.lazy((value) => {
        // Check if the input value is an email address
        if (value && /\S+@\S+\.\S+/.test(value)) {
            // If it's an email address, validate it as an email
            return yup.string().email('Invalid email');
        } else {
            // If it's not an email address, validate it as a username
            return yup.string().required('Username is required');
        }
    }),
    password: yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
});