import React from 'react'

interface inputProps {
    type: string;
    placeHolder:string;
    name:string;
    label:string;
}

const CommonInput: React.FC<inputProps> = ({ 
    type,
    placeHolder,
    name,
    label,
 }) => {
    return (
        <div className=' rounded-lg flex flex-col gap-2 relative'>
            {/* <label htmlFor={name} className='text-md font-base'>{label}</label> */}
            <input
                type={type}
                id={name}
                // placeholder={placeHolder}
                className='bg-transparent outline-none shadow-[0px_0px_0px_1px_#fff] p-3 border-0 rounded-md w-full focus-within:shadow-[0px_0px_0px_1.5px_#fff] placeholder:text-white'
            />
            <span className='absolute text-white bg-red-400 z-20 top-[20%] left-5 transition-all labelAnim'>{label}</span>
        </div>
    )
}

export default CommonInput;