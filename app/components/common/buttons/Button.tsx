import React from 'react'
import { RiLoader2Line, RiLoaderLine } from "react-icons/ri";
import { BiLoader, BiLoaderCircle } from "react-icons/bi";
import { LuLoader } from "react-icons/lu";
import { ButtonProps } from '@/app/interfaces/Interfaces'

const Button: React.FC<ButtonProps> = ({
    label,
    icon,
    className,
    variant,
    type,
    loading,
    onClick
}) => {

    let buttonClass = ""

    switch (variant) {

        case 'pill_transparent':
            buttonClass = "relative flex items-center gap-4 text-lg font-semibold text-white  py-[5px] px-3 w-full justify-center bg-bgSecondary transition-all duration-300 cursor-pointer text-white font-semibold rounded-3xl p-2"

        case 'transparent':
            buttonClass = ""
            break;

        default:
            buttonClass = "relative flex items-center gap-4 text-lg font-semibold text-white border border-2 border-transparent py-[5px] px-3 w-full justify-center rounded-md bg-red-600 transition-all duration-300 cursor-pointer hover:text-white hover:bg-red-700 hover:border-red-700"
    }

    return (
        <button className={`${buttonClass} disabled:opacity-65`}
            type={type || "button"}
            onClick={onClick}
            disabled={loading}
        >
            <span>{icon}</span>
            {loading ?
                <>
                    <span>
                        Processing...
                    </span>
                    <span className="animate-spin"><LuLoader className='text-xl' /></span>
                </>
                :
                <span>{label}</span>
            }
        </button>
    )
}

export default Button;