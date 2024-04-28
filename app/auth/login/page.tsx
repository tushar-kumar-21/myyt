'use client';
import React, { useEffect, useRef, useState } from 'react'
import Banner from '../login/Banner'
import Button from '@/app/components/common/buttons/Button'
import { useFormik } from 'formik'
import { loginSchema, registerUserSchema } from '@/app/api/schema'
import { useDispatch, useSelector } from 'react-redux';
import { loggedinUser } from '@/app/api/redux/slices/auth';
import { RootState, AppDispatch } from '@/app/api/redux/store/store';
import LoginForm from './LoginForm';
import toast from 'react-hot-toast';

const Login = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { btnValidator } = useSelector((state: RootState) => state.commonReducer);


    const formik = useFormik({
        initialValues: {
            usernameOrEmail: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            let payload;
            if (/\S+@\S+\.\S+/.test(values.usernameOrEmail)) {
                payload = { email: values.usernameOrEmail, password: values.password };
            } else {
                payload = { username: values.usernameOrEmail, password: values.password };
            }
            dispatch(loggedinUser(payload))

        }
    });

    return (
        <>
            <div className='w-3/4 rounded-2xl m-auto fixed inset-0 my-6 grid grid-cols-2 overflow-hidden'>
                <div className='grid place-items-center bg-red-400 py-6 pb-10 px-10 overflow-y-scroll scroller'>
                    <LoginForm formik={formik} />
                    <Button
                        label="Login"
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

export default Login