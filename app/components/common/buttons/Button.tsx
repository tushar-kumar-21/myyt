import React from 'react'
import { RiLoader2Line, RiLoaderLine } from "react-icons/ri";
import { BiLoader, BiLoaderCircle } from "react-icons/bi";
import { LuLoader } from "react-icons/lu";
import { ButtonProps } from '@/app/interfaces/Interfaces'

// const Button: React.FC<ButtonProps> = ({
//     label,
//     icon,
//     className,
//     variant,
//     type,
//     loading,
//     onClick
// }) => {

//     let buttonClass = ""

//     switch (variant) {

//         case 'pill_transparent':
//             buttonClass = "relative flex items-center gap-4 text-lg font-semibold text-white  py-[5px] px-3 w-full justify-center bg-bgSecondary transition-all duration-300 cursor-pointer text-white font-semibold rounded-3xl p-2"

//         case 'transparent':
//             buttonClass = ""
//             break;

//         default:
//             buttonClass = "relative flex items-center gap-4 text-lg font-semibold text-white border border-2 border-transparent py-[5px] px-3 w-full justify-center rounded-md bg-red-600 transition-all duration-300 cursor-pointer hover:text-white hover:bg-red-700 hover:border-red-700"
//     }

//     return (
//         <button className={`${buttonClass} disabled:opacity-65`}
//             type={type || "button"}
//             onClick={onClick}
//             disabled={loading}
//         >
//             <span>{icon}</span>
//             {loading ?
//                 <>
//                     <span>
//                         Processing...
//                     </span>
//                     <span className="animate-spin"><LuLoader className='text-xl' /></span>
//                 </>
//                 :
//                 <span>{label}</span>
//             }
//         </button>
//     )
// }

// export default Button;

import { twMerge } from 'tailwind-merge'

const Button: React.FC<ButtonProps> = ({
    label,
    type = "submit",
    variant = "theme",
    icon,
    className = "",
    onClick,
    loading,
}) => {

    const buttonVariants = {
        theme: [
            "relative flex items-center gap-4 text-lg font-semibold border border-2 border-transparent py-[5px] px-3 w-full justify-center rounded-md bg-red-600 transition-all duration-300 cursor-pointer hover:text-white hover:bg-red-700 hover:border-red-700",
            "text-white",
            ""
        ],
        theme2:[
            "bg-white rounded-3xl py-1 hover:opacity-75",
            "text-black font-semibold text-base"
        ],
        pill_transparent: [
            "text-white font-semibold rounded-3xl bg-bgSecondary"
        ],
        delete: [
            "bg-red-500 flex gap-3 hover:bg-red-600 border-2 border-red-500 min-w-max",
            "text-whiteColor",
            "text-whiteColor"
        ],
        danger: [
            "bg-lightRed py-2 border-0 w-full hover:bg-dangerHover",
            "text-darkRed text-sm",
        ],
        success: [
            "bg-darkGreen py-2 border-0 w-full hover:bg-successHover",
            "text-whiteColor text-sm"
        ],
        view: [
            "bg-greyshadowColor border-0 py-2 hover:bg-greyDarkShadow",
            "text-darkGrey text-sm"
        ],
        transparent: [
            "bg-white py-2 hover:bg-darkGrey w-full flex gap-3",
            "text-blackColor font-medium group-hover:text-whiteColor",
            "text-blackColor group-hover:text-white"
        ],
        // theme:[
        //     "bg-greenThinColor border-0 py-2 hover:bg-transparent border-2 border-greenMain",
        //     "text-greenMain font-medium group-hover:text-greenThinkColor",
        //     "text-greenMain"
        // ],
        borderTransparent: [
            "bg-white hover:bg-darkGrey border-2 border-darkGrey",
            "text-darkGrey font-medium group-hover:text-whiteColor",
            "text-darkGrey group-hover:text-white"
        ]
    }

    return (
        <button
            disabled={loading}
            className={twMerge(
                `rounded-md group bg-transparent group transition-all duration-300 flex items-center justify-center gap-1 px-4 py-3 sm:py-2 w-auto disabled:opacity-65 disabled:cursor-not-allowed`,
                buttonVariants[variant][0],
                className
            )}
            type={type}
            onClick={onClick}
        >
            {icon && <span className={`${buttonVariants[variant][2]}`}>{icon}</span>}
            {loading ?
                <>
                    <span className={`${buttonVariants[variant][1]}`}>
                        Processing...
                    </span>
                    <span className="animate-spin"><LuLoader className='text-xl text-white' /></span>
                </>
                :
                <span className={`${buttonVariants[variant][1]} sm:block hidden`}>{label}</span>
            }
        </button >
    )
}

export default Button;