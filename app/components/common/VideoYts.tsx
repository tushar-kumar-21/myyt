import { VideoLists } from '@/app/interfaces/Interfaces';
import Image from 'next/image';
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface VideoProps {
    video: VideoLists;
    className?:string;
}

const VideoYts: React.FC<VideoProps> = ({ video, className }) => {
    return (
        <div className={twMerge('w-full', className)}>
            <div className='rounded-lg overflow-hidden mb-3 relative'>
                <div className='max-w-[300px]'>
                    <img
                        src={video?.thumbnail}
                        alt='img'
                        className='object-contain'
                    />
                </div>
                <span className='absolute right-2 bottom-2 text-sm font-semibold bg-black px-2 py-0 rounded-md'>{video?.duration}</span>
            </div>
            <div className='flex gap-3'>
                <img src={video?.channelImage} alt="img" className='w-9 h-9 rounded-full' />
                <div className='flex flex-col'>
                    <span className='font-semibold'>{video?.title}</span>
                    <span className='text-textSecondary font-medium'>{video?.channel}</span>
                    <span className='text-textSecondary font-medium'>{video?.views}</span>
                </div>
            </div>
        </div>
    )
}

export default VideoYts;