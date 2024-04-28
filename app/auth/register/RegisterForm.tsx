'use client'
import CommonInput from '@/app/components/common/inputs/CommonInput';
import Image from 'next/image';
import ytlogo from "../../../public/svgs/ytlogo-wh.svg"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FieldInputProps, useFormik } from 'formik';
import { registerUserSchema } from '@/app/api/schema';
import { formikProps } from '@/app/interfaces/Interfaces';

const RegisterForm: React.FC<formikProps> = ({formik}) => {

    
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePassword=()=>{
        setShowPassword((prev:boolean)=>!prev)
    }

    return (
        <div className='flex flex-col gap-5 w-full'>
            <Image
                src={ytlogo}
                height={90}
                width={90}
                className='mb-5'
                alt="ytlogo"
            />
            <span className='text-2xl'>Log in to your account</span>
            <CommonInput
                type="text"
                name="username"
                label='Username'
                formik={formik}
            />
            <CommonInput
                type="text"
                name="fullname"
                label='Fullname'
                formik={formik}
            />
            <CommonInput
                type="email"
                name="email"
                label='Email'
                formik={formik}
            />
            <CommonInput
                type={showPassword ? "text":'password'}
                name="password"
                label='Password'
                togglePassword={togglePassword}
                showPassword={showPassword}
                formik={formik}
            />
            <div className='w-full flex justify-end hover:text-red-700 group hover:underline'>
                <Link href="/auth/login" className='text-lg'>Already have an account? Sign In</Link>
            </div>
        </div>
    )
}

export default RegisterForm;