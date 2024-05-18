import Button from '@/app/components/common/buttons/Button';
import React from 'react'
import { TfiAngleRight } from "react-icons/tfi";
import SearchBar from '@/app/dashboard/channel/SearchBar';

const Page = () => {
  return (
    <div className='w-full h-full py-4'>
      <div className='flex items-center gap-6 px-28'>
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
          <span className='flex items-center text-textSecondary'>More about this channel <TfiAngleRight /></span>
          <div className='mt-5 space-x-5 flex items-center'>
            <Button
              label="Customize channel"
              variant='pill_transparent'
            />
            <Button
              label="Manage videos"
              variant='pill_transparent'
            />
          </div>
        </div>

      </div>
      <div className='w-full'>
        <div className='list-none border-b-[1px] border-bgSecondaryLow w-full px-28 mt-5 flex'>
          <li className='font-semibold text-lg border-b-2 border-white max-w-fit px-[2px] pb-2'>Home</li>
        <SearchBar/>
        </div>
      </div>
      <div className=' w-fit max-w-72 m-auto text-center my-14'>
        <div className='w-36 h-36 mx-auto'>
          <img src="https://www.gstatic.com/youtube/img/channels/core_channel_no_activity_dark.svg" alt="" />
        </div>
        <p className='leading-9'>Create content on any device</p>
        <span>Upload and record at home or on the go. Everything you make public will appear here.</span>
        <Button
        label="Create"
        variant='theme2'
        className='mx-auto mt-4'
        />
      </div>
    </div>
  )
}

export default Page;