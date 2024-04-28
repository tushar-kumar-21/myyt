import ErrorComp from "@/app/api/auth/ErrorComp";
import { FieldInputProps } from "formik";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


interface inputProps {
    type: string;
    placeHolder?: string;
    name: string;
    label: string;
    id?: string;
    showPassword?:boolean;
    togglePassword?: () => void;
    formik?: {
        getFieldProps: (nameOrOptions: string | FieldInputProps<any>) => FieldInputProps<any>;
        errors?: {
            [key: string]: string;
        },
        touched?: {
            [key: string]: boolean;
        };
    };
}

const CommonInput: React.FC<inputProps> = ({
    type,
    placeHolder = "",
    name,
    label,
    id = "",
    formik,
    togglePassword,
    showPassword
}) => {
    const fieldProps = formik?.getFieldProps ? formik.getFieldProps(name) : {};

    return (
        <div>
            <div className='rounded-lg flex flex-col gap-2 relative mb-1 bg-transparent'>
                {/* <label htmlFor={name} className='text-md font-base'>{label}</label> */}
                <input
                    type={type}
                    id={id}
                    {...fieldProps}
                    placeholder={placeHolder}
                    autoComplete="off"
                    className='bg-transparent outline-none shadow-[0px_0px_0px_1px_#fff] p-3 border-0 rounded-md w-full focus-within:shadow-[0px_0px_0px_1.5px_#fff] placeholder:text-white animInput'
                />
                <span className='absolute text-white bg-red-400 z-20 top-[20%] left-5 transition-all labelAnim pointer-events-none'>{label}</span>
              { togglePassword &&  <span
                    onClick={togglePassword}
                    className="absolute cursor-pointer top-[50%] right-4 transform -translate-y-1/2"
                >
                    {showPassword ? <FaEye className="h-6 w-6 text-white" /> : <FaEyeSlash className="h-6 w-6 text-white" />}
                </span>}

            </div>
            {
                formik &&
                formik.errors &&
                formik.touched &&
                formik.touched[name] &&
                formik.errors[name] &&
                (
                    <ErrorComp msg={formik.errors[name]} />
                )
            }
        </div>
    )
}

export default CommonInput;