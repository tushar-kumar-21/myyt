import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <Header />
      <div className='w-full grid grid-cols-[.2fr,1fr] h-[calc(100%-64px)]'>
        <Sidebar />
        <div>
          
        </div>
      </div>
    </>
  )
}

export default Page;