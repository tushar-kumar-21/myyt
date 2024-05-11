'use client';
import VideoYts from '@/app/components/common/VideoYts';
import React, { useState } from 'react'
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { IoListSharp } from "react-icons/io5";

const Page = () => {

    const [view, setView] = useState("grid");

    const videoData = [
        {
            thumbnail:
                'https://i.ytimg.com/vi/RBM03RihZVs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4CorsvgCkCUDrEbndl9JOibveXQ',
            duration: '20:26',
            channelImage:
                'https://yt3.ggpht.com/ytc/AIf8zZS9elzNIh4PmLo5aWFT4CWP-1ixiyJJbgWQVadm_Q=s68-c-k-c0x00ffffff-no-rj',
            title: '10 common mistakes with the Next.js App Router',
            channel: 'Vercel',
            views: '51k views ~ 4 days ago',
        },
    ];

    return (
        <div className='pr-10'>
            <div className='flex justify-between items-center'>
                <span className='text-white text-xl font-semibold'>Latest</span>
                <div className='flex gap-5 items-center'>
                    <span className='text-bluePrimary font-semibold'>Manage</span>
                    <TfiLayoutGrid3Alt className='cursor-pointer' onClick={() => setView("grid")} />
                    <IoListSharp className='text-xl cursor-pointer' onClick={() => setView("list")} />
                </div>
            </div>
            <div className={`w-full grid ${view == "list" ? 'grid-cols-1' : 'grid-cols-4'} p-6 gap-6`}>
                {videoData?.map((video, ind) => (
                    <>
                        <VideoYts
                            className={(view === "list") ? "flex" : ""}
                            video={video}
                        />
                        <VideoYts
                            className={(view === "list") ? "flex" : ""}
                            video={video}
                        />
                        <VideoYts
                            className={(view === "list") ? "flex" : ""}
                            video={video}
                        />
                        <VideoYts
                            className={(view === "list") ? "flex" : ""}
                            video={video}
                        />
                        <VideoYts
                            className={(view === "list") ? "flex" : ""}
                            video={video}
                        />
                        <VideoYts
                            className={(view === "list") ? "flex" : ""}
                            video={video}
                        />
                        <VideoYts
                            className={(view === "list") ? "flex" : ""}
                            video={video}
                        />
                        <VideoYts
                            className={(view === "list") ? "flex" : ""}
                            video={video}
                        />
                        <VideoYts
                            className={(view === "list") ? "flex" : ""}
                            video={video}
                        />
                        <VideoYts
                            className={(view === "list") ? "flex" : ""}
                            video={video}
                        />
                        <VideoYts
                            className={(view === "list") ? "flex" : ""}
                            video={video}
                        />
                     
                    </>
                ))}
            </div>
        </div>
    )
}

export default Page