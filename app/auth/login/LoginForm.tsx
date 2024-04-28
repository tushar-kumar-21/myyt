import CommonInput from '@/app/components/common/inputs/CommonInput';
import Image from 'next/image';
import ytlogo from "../../../public/svgs/ytlogo-wh.svg"
import React, { useState } from 'react'
import { FormikProps } from 'formik';
import { formikProps } from '@/app/interfaces/Interfaces';

const LoginForm: React.FC<formikProps> = ({ formik }) => {

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
                name="usernameOrEmail"
                label='Username or email'
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
            <div className='w-full flex justify-end'>
                <span className='text-lg'>Forgot your password</span>
            </div>
        </div>
    )
}

export default LoginForm;