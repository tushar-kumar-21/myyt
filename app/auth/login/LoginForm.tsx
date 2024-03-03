import CommonInput from '@/app/components/common/CommonInput';
import Image from 'next/image';
import ytlogo from "../../../public/svgs/ytlogo-wh.svg"
import React from 'react'

const LoginForm = () => {
    return (
        <div className='flex flex-col gap-5 w-[80%]'>
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
                placeHolder='Enter your email'
                name="login"
                label='Username or email'
            />
            <CommonInput
                type="password"
                placeHolder='Enter your password'
                name="password"
                label='Password'
            />
            <div className='w-full flex justify-end'>
                <span className='text-lg'>Forgot your password</span>
            </div>
        </div>
    )
}

export default LoginForm;