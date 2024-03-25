'use client'
import React, { useEffect } from 'react'
import ShortsVid from './ShortsVid';
import { ShortsStore } from "../zustand/api/shortsStore";
import { ShortVideo } from '../interfaces/Interfaces';
import { VideoFile } from '../interfaces/Interfaces';

const page = () => {

    const { getShortVideos, shortVideos } = ShortsStore();

    useEffect(() => {
        getShortVideos(2)
    }, [])

    return (
        <div className='max-h-[calc(100vh-70px)] grid place-items-center overflow-y-scroll py-2 gap-6 scroller'>
            {
                shortVideos?.map((shorts: VideoFile) => (
                    <ShortsVid
                        shortVideos={shorts}                        
                    />
                ))
            }

        </div>
    )
}

export default page;