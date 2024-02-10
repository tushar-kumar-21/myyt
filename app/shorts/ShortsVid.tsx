'use client';
import React, { useEffect, useState } from 'react'
import { FaPlay, FaArrowUp, FaArrowDown, FaPause } from 'react-icons/fa6';
import { HiSpeakerWave } from 'react-icons/hi2';
import { MdThumbUp, MdThumbDown, MdMessage } from 'react-icons/md';
import { IoArrowRedo, IoEllipsisHorizontalSharp } from "react-icons/io5";
import { ShortVideo, VideoFile } from '../interfaces/Interfaces';

interface ShortsProps {
    shortVideos: VideoFile;
}

const ShortsVid: React.FC<ShortsProps> = ({ shortVideos }) => {


    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const video = document.getElementById('shortsVideo') as HTMLVideoElement;
        if (video) {
            if (isPlaying) {
                video.pause();
            } else {
                video.play();
            }
            setIsPlaying(!isPlaying);
        }
    };



    return (
        <div className='min-h-[610px] w-[330px] rounded-xl relative  bg-black cursor-pointer'
            onClick={togglePlay}
            key={shortVideos.id}
        >
            <div className='w-full flex justify-between px-6 py-5 absolute top-0 text-xl'>
                {
                    isPlaying ?
                        <FaPause onClick={togglePlay} />
                        :
                        <FaPlay onClick={togglePlay} />
                }
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
            </div>
            <video
                id="shortsVideo"
                src={shortVideos?.video_files[1]?.link}
                className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            ></video>

            {
                !isPlaying ?
                    < div className={`bg-[rgba(0,0,0,0.7)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full grid place-items-center ${isPlaying ? 'playPauseAnim' : 'opacity-100'}`}>
                        <FaPlay className="text-2xl" />
                    </div>
                    :
                    < div className={`bg-[rgba(0,0,0,0.7)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full grid place-items-center playPauseAnim`}>
                        <FaPause className="text-2xl" />
                    </div>

            }
        </div >
    )
}

export default ShortsVid;