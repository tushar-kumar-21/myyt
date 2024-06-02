import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';

const Page = () => {
  return (
    <section className='bg-bgGreySolid'>
      <Header/>
      <div className='w-full grid grid-cols-[.3fr,1fr]'>
        <Sidebar/>
        <div>

        </div>
      </div>
    </section>
  )
}

export default Page;