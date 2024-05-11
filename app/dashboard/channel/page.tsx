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
        </div>
        <div>
          <span className='text-white font-semibold rounded-3xl bg-bgSecondary p-2 px-4'>Customize channel</span>
        </div>
      </div>
    </div>
  )
}

export default Page;