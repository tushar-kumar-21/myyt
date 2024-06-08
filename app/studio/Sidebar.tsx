'use client';
import React, { useState } from 'react'
import { CategoryItem } from '../interfaces/Interfaces';
import {
  MdOutlineDashboard,
  MdOutlineVideoLibrary,
  MdOutlineAnalytics,
  MdOutlineInsertComment
} from "react-icons/md";
import { PiSubtitlesBold } from "react-icons/pi";
import { FaRegCopyright } from "react-icons/fa6";
import { FiDollarSign } from "react-icons/fi";
import { PiMagicWandBold } from "react-icons/pi";
import { MdOutlineLibraryMusic } from "react-icons/md";

const Sidebar = () => {

  const [active, setActive] = useState(0);

  const categories: CategoryItem[] = [
    { label: 'Dashboard', icon: <MdOutlineDashboard /> },
    { label: 'Content', icon: <MdOutlineVideoLibrary /> },
    { label: 'Analytics', icon: <MdOutlineAnalytics /> },
    { label: 'Comments', icon: <MdOutlineInsertComment /> },
    { label: 'Subtitles', icon: <PiSubtitlesBold /> },
    { label: 'Copyright', icon: <FaRegCopyright /> },
    { label: 'Earn', icon: <FiDollarSign /> },
    { label: 'Customization', icon: <PiMagicWandBold /> },
    { label: 'Audio Library', icon: <MdOutlineLibraryMusic /> },
  ];

  return (
    <aside className=''>
      <div className='grid place-items-center gap-4 pt-6'>
        <div className='w-28 h-28 rounded-full overflow-hidden'>
          <img
            src="https://yt3.googleusercontent.com/XBRoQ7Se95lnwEOI6BzFQrYw7IG2KBwp2SHIqfueEciGPMqUkHk_ULWcii7gu-FFTO9Wme8Aew=s176-c-k-c0x00ffffff-no-rj"
            alt="#"
          />
        </div>
        <div className='text-center'>
          <h4 className='font-semibold text-base'>Your Channel</h4>
          <h4 className='text-sm text-textSecondary'>tushar kumar</h4>
        </div>
      </div>
      <div className='list-none mt-4 max-h-80 overflow-y-scroll scroller border-bgSecondary border-r-[0.1px] border-b-[0.1px]'>
        {
          categories?.map((item, ind:number) => (
            <li className={`flex items-center gap-5 px-5 cursor-pointer py-3 border-l-4 ${active == ind ? "border-textPrimary  text-textPrimary bg-activeBlack" : "border-transparent"}`} onClick={()=>setActive(ind)}>
              <span className='text-2xl'>{item.icon}</span>
              <span className='font-semibold'>{item?.label}</span>
            </li>
          ))
        }
      </div>
    </aside>
  )
}

export default Sidebar