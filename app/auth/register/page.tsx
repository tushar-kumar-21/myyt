'use client';
import React from 'react'
import RegisterForm from './RegisterForm'
import Banner from '../login/Banner'
import Button from '@/app/components/common/buttons/Button'
import { useFormik } from 'formik'
import { registerUserSchema } from '@/app/api/schema'

const Register = () => {

    const formik = useFormik({
        initialValues: {
            username: '',
            fullname: '',
            email: '',
            password: ''
        },
        validationSchema:registerUserSchema,
        onSubmit: (values) => {
            console.log(values);
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