import Button from '@/app/components/common/buttons/Button';
import React from 'react'
import { TfiAngleRight } from "react-icons/tfi";

const Page = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex items-center gap-6'>
        <div className='w-40 h-40'>
          <img
            src="https://yt3.googleusercontent.com/XBRoQ7Se95lnwEOI6BzFQrYw7IG2KBwp2SHIqfueEciGPMqUkHk_ULWcii7gu-FFTO9Wme8Aew=s176-c-k-c0x00ffffff-no-rj"
            alt=""
            className='w-full h-full rounded-full'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-[2.5rem] leading-none font-bold'>tushar kumar</span>
          <span className='text-textSecondary'>@tusharkumar-dw1qc</span>          
          <span className='flex items-center text-textSecondary'>More about this channel <TfiAngleRight/></span>          
        <div className='mt-5 space-x-5'>
          <span className='text-white font-semibold rounded-3xl bg-bgSecondary p-2 px-4'>Customize channel</span>
          <span className='text-white font-semibold rounded-3xl bg-bgSecondary p-2 px-4'>Manage videos</span>
        </div>
        </div>

      </div>         
        <div className='w-full'>
        <div className='list-none border-b-[1px] border-bgSecondaryLow w-full'>
          <li className='font-semibold text-lg border-b-2 border-white max-w-fit px-[2px] pb-2'>Home</li>
        </div>
        </div>
    </div>
  )
}

export default Page;