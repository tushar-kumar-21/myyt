'use client';
import React, { useEffect, useRef } from 'react'
import RegisterForm from './RegisterForm'
import Banner from '../login/Banner'
import Button from '@/app/components/common/buttons/Button'
import { useFormik } from 'formik'
import { registerUserSchema } from '@/app/api/schema'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '@/app/api/redux/slices/auth';
import { RootState, AppDispatch } from '@/app/api/redux/store/store';

const Register = () => {

    const userRef = useRef(false);
    const dispatch = useDispatch<AppDispatch>();
    const { btnValidator } = useSelector((state: RootState) => state.commonReducer);
    

    const formik = useFormik({
        initialValues: {
            usernameOrEmail: '',
            fullname: '',
            email: '',
            password: ''
        },
        validationSchema: registerUserSchema,
        onSubmit: (values) => {
            dispatch(registerUser(values))
        }
    });

    return (
        <>
            <div className='w-3/4 rounded-2xl m-auto fixed inset-0 my-6 h-100vh grid grid-cols-2 overflow-hidden'>
                <div className='grid place-items-center bg-red-400 py-6 px-10 overflow-y-scroll'>
                    <RegisterForm formik={formik} />
                    <Button
                        label="Register"
                        variant='theme'
                        onClick={formik.handleSubmit}
                        loading={btnValidator}
                    />
                </div>
                <div className='grid place-items-center overflow-hidden'>
                    <Banner />
                </div>
            </div>
        </>
    )
}

export default Register