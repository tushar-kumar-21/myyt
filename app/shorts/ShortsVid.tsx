import React from 'react'
import { FaPlay, FaArrowUp, FaArrowDown } from 'react-icons/fa6';
import { HiSpeakerWave } from 'react-icons/hi2';
import { MdThumbUp, MdThumbDown, MdMessage } from 'react-icons/md';
import { IoArrowRedo, IoEllipsisHorizontalSharp } from "react-icons/io5";

const ShortsVid = () => {
    return (
        <div className=' border h-[86%] basis-3/12 rounded-xl relative'>
            <div className='w-full flex justify-between px-6 py-5 absolute top-0 text-xl'>
                <FaPlay />
                <HiSpeakerWave />
            </div>
            <div className='absolute bottom-0 flex flex-col p-4'>
                <div className='flex items-center gap-1'>
                    <img src="https://yt3.ggpht.com/ytc/AIf8zZS9elzNIh4PmLo5aWFT4CWP-1ixiyJJbgWQVadm_Q=s68-c-k-c0x00ffffff-no-rj"
                        className='rounded-full h-9 w-9'
                        alt="img" />
                    <span className='font-semibold'>@<span>codesnsolutions</span></span>
                    <button className='bg-white rounded-3xl text-black font-semibold text-sm p-2 py-1'>Subscribe</button>
                </div>
                <div>
                    <span> i can't believe i wrote this React code </span>
                </div>
            </div>

            <div className='absolute text-2xl flex flex-col gap-5 items-center -right-16 bottom-0'>
                <div className='flex flex-col items-center gap-1'>
                    <div className='bg-bgPrimary p-3 rounded-full relative'>
                        <MdThumbUp className="" />
                    </div>
                    <span className='text-sm font-semibold'>2.7k</span>
                </div>

                <div className='flex flex-col items-center gap-1'>
                    <div className='bg-bgPrimary p-3 rounded-full relative'>
                        <MdThumbDown />
                    </div>
                    <span className='text-sm font-semibold'>Dislike</span>
                </div>

                <div className='flex flex-col items-center gap-1'>
                    <div className='bg-bgPrimary p-3 rounded-full relative'>
                        <MdMessage />
                    </div>
                    <span className='text-sm font-semibold'>99</span>
                </div>

                <div className='flex flex-col items-center gap-1'>
                    <div className='bg-bgPrimary p-3 rounded-full relative'>
                        <IoArrowRedo />
                    </div>
                    <span className='text-sm font-semibold'>Share</span>
                </div>

                <div className='bg-bgPrimary p-3 rounded-full relative'>
                    <IoEllipsisHorizontalSharp />
                </div >
                <div className='w-10 h-10 rounded-md overflow-hidden grid place-items-center'>
                    <img src="https://yt3.ggpht.com/ytc/AIf8zZS9elzNIh4PmLo5aWFT4CWP-1ixiyJJbgWQVadm_Q=s68-c-k-c0x00ffffff-no-rj"
                        className='h-full w-full'
                        alt="img"
                    />
                </div>
            </div >
        </div >
    )
}

export default ShortsVid;