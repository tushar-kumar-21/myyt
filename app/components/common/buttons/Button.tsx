import React from 'react'
import { ButtonProps } from '@/app/interfaces/Interfaces'

const Button: React.FC<ButtonProps> = ({
    label,
    icon,
    className,
    variant,
    type,
    onClick
}) => {

    let buttonClass = ""

    switch (variant) {
        case 'theme':
            buttonClass = "flex items-center gap-4 text-lg font-semibold text-white border border-2 border-transparent py-[5px] px-3 w-full justify-center rounded-md bg-red-700 transition-all duration-300 cursor-pointer hover:text-red-700 hover:bg-transparent hover:border-red-700"
            break;

        case 'transparent':
            buttonClass = ""
            break;

        default:
            buttonClass = ""
    }

    return (

        <button className={`${buttonClass}`}
            type={type || "button"}
            onClick={onClick}
        >
            <span>{icon}</span>
            <span>{label}</span>
        </button>

    )
}

export default Button;