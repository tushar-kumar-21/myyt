'use client';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoSearchOutline } from 'react-icons/io5';
import { HiOutlineDotsVertical, HiOutlineUserCircle } from "react-icons/hi";
import { PiUserCircle } from "react-icons/pi";
import { BiSolidMicrophone } from "react-icons/bi";

const Header = () => {
    return (
        <div className='p-5 flex justify-between pt-2 w-full bg-black sticky top-0'>
            <div className='relative flex gap-4 w-fit items-center'>
                <RxHamburgerMenu className="text-[22.5px] text-white" />
                <Image
                    src="svgs/ytlogo-wh.svg"
                    height={90}
                    width={90}
                    alt="ytlogo"
                />
                <span className='absolute -right-[18px] -top-0 text-xs text-gray-300'>IN</span>
            </div>

            <div className='flex border border-gray-600 rounded-3xl basis-2/5 justify-between relative group'>
                <input
                    type="text"
                    placeholder='Search'
                    className='bg-transparent px-3 h-full w-full outline-none ps-4 placeholder:text-gray-400 tracking-wider  focus:border border-blue-600 focus:rounded-l-3xl'
                />
                <div className='h-full w-fit bg-[rgba(126,126,126,0.25)] px-5 py-2 rounded-r-3xl'>
                    <IoSearchOutline className="text-2xl text-gray-400" />
                </div>
                <div className='bg-[rgba(126,126,126,0.25)] absolute -right-14 p-3 rounded-full'>
                    <BiSolidMicrophone className=" text-xl" />
                </div>
            </div>

            <div className='flex items-center gap-5'>
                <HiOutlineDotsVertical className="text-xl" />
                <div className='flex items-center border border-gray-600 rounded-3xl p-2 py-1 gap-2'>
                    <PiUserCircle className="text-blue-500 text-[1.7rem]" />
                    <span className='text-blue-500 font-semibold text-base'>Sign in</span>
                </div>
            </div>
        </div>
    )
}

export default Header;