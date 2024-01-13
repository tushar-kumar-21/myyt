'use client'
import React, { useState } from 'react'
import { CategoryItem } from '../interfaces/Interfaces'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const HomeScroller = () => {

    const [active, setActive] = useState<Number>();

    const categories = [
        "All",
        "Music",
        "Lofi",
        "Sports",
        "Live",
        "Gaming",
        "Sports Leagues",
        "DevOps",
        "Gadgets",
        "History",
        "Real Madrid CF",
        "News",
        "Sales",
        "Accounting",
        "Ranveer Allahbadia",
        "Real hit",
        "Divyansh",
        "ONE MUFC",
        "Drog Baba",
        "Talk Football HD",
    ];

    return (
        <div className='sticky top-0 bg-bgBackPrimary z-20'>
            <div className='w-full relative py-2 pb-0'>
                <div className='absolute left-0 top-2 bg-bgBackPrimary flex items-center justify-center w-10 h-8 z-10 shadow-[10px_-1px_31px_40px_#0f0f0f]'>
                    <FaAngleLeft className="bg-bgBackPrimary z-10 text-lg" />
                </div>
                <div className='absolute right-0 top-2 bg-bgBackPrimary flex items-center justify-center w-10 h-8 z-10 shadow-[0px_0px_39px_40px_#0f0f0f]'>
                    <FaAngleRight className=" bg-bgBackPrimary z-10 text-lg" />
                </div>
                <div className='flex gap-4 items-start overflow-x-scroll max-w-full scroller relative'>
                    {categories?.map((items, ind) => (
                        <li className={`list-none min-w-max bg-bgPrimary px-3 py-1 font-semibold rounded-md text-md cursor-pointer transition-all duration-500 ${active === ind && 'bg-white text-black'}`}
                            key={ind}
                            onClick={() => setActive(ind)}
                        >
                            {items}
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeScroller;