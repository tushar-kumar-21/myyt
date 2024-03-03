import React from 'react';
import LoginForm from './LoginForm';
import Banner from './Banner';

const Login = () => {
    return (
        <div className='w-3/4 rounded-2xl m-auto fixed inset-0 max-h-[85vh] grid grid-cols-2 overflow-hidden'>
            <div className='grid place-items-center bg-red-400'>
           
                <LoginForm />
            </div>
            <div className='grid place-items-center overflow-hidden'>
                <Banner/>
            </div>
        </div>
    )
}

export default Login
