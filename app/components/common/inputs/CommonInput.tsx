import ErrorComp from "@/app/api/auth/ErrorComp";
import { FieldInputProps } from "formik";

interface inputProps {
    type: string;
    placeHolder?: string;
    name: string;
    label: string;
    id?: string;
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
    formik
}) => {

    const fieldProps = formik?.getFieldProps ? formik.getFieldProps(name) : {};

    return (
        <div>
            <div className=' rounded-lg flex flex-col gap-2 relative mb-1'>
                {/* <label htmlFor={name} className='text-md font-base'>{label}</label> */}
                <input
                    type={type}
                    id={id}
                    {...fieldProps}
                    placeholder={placeHolder}
                    className='bg-transparent outline-none shadow-[0px_0px_0px_1px_#fff] p-3 border-0 rounded-md w-full focus-within:shadow-[0px_0px_0px_1.5px_#fff] placeholder:text-white animInput'
                />
                <span className='absolute text-white bg-red-400 z-20 top-[20%] left-5 transition-all labelAnim'>{label}</span>
            </div>
            {formik && formik.errors && formik.touched && formik.touched[name] && formik.errors[name] && (
                <ErrorComp msg={formik.errors[name]} />
            )}
        </div>
    )
}

export default CommonInput;