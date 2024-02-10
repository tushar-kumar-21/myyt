'use client';
import { GoHomeFill } from 'react-icons/go';
import { SiYoutubeshorts, SiYoutubegaming } from 'react-icons/si';
import { MdSubscriptions, MdMovieCreation, MdSettingsInputAntenna, MdStyle, MdPodcasts } from 'react-icons/md';
import { PiMonitorPlayFill, PiUserCircle, PiMusicNotesBold } from 'react-icons/pi';
import { LuHistory } from 'react-icons/lu';
import useUniqueIdStore from '@/app/zustand/store';
import { IconType } from 'react-icons';
import { BsFire } from "react-icons/bs";
import { SiYoutubemusic } from "react-icons/si";
import { FaLightbulb } from "react-icons/fa6";
import { HiMiniShoppingBag, HiMiniTrophy } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { IoLogoYoutube, IoNewspaper } from "react-icons/io5";
import { RiAddCircleLine } from "react-icons/ri";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { CategoryItem } from '@/app/interfaces/Interfaces';
import { useRouter } from 'next/navigation';

const styles = {
    listStyle: 'list-none flex items-center p-2 gap-6 px-4 rounded-lg mb-1 cursor-pointer transition-all group hover:bg-bgPrimary'
}

const Sidebar = () => {
    const { generateUniqueId } = useUniqueIdStore();

    const router = useRouter();

    const categories: CategoryItem[] = [
        { label: 'Home', icon: <GoHomeFill />, id: generateUniqueId(), path: '/' },
        { label: 'Shorts', icon: <SiYoutubeshorts />, id: generateUniqueId(), path: '/shorts' },
        { label: 'Subscriptions', icon: <MdSubscriptions />, id: generateUniqueId() },
        { label: 'You', icon: <PiMonitorPlayFill />, id: generateUniqueId() },
        { label: 'History', icon: <LuHistory />, id: generateUniqueId() },
    ];

    const exploreCategories: CategoryItem[] = [
        { label: 'Trending', icon: <BsFire />, id: generateUniqueId() },
        { label: 'Shopping', icon: <HiMiniShoppingBag />, id: generateUniqueId() },
        { label: 'Music', icon: <PiMusicNotesBold />, id: generateUniqueId() },
        { label: 'Movies', icon: <MdMovieCreation />, id: generateUniqueId() },
        { label: 'Live', icon: <MdSettingsInputAntenna />, id: generateUniqueId() },
        { label: 'Gaming', icon: <SiYoutubegaming />, id: generateUniqueId() },
        { label: 'News', icon: <IoNewspaper />, id: generateUniqueId() },
        { label: 'Sports', icon: <HiMiniTrophy />, id: generateUniqueId() },
        { label: 'Learning', icon: <FaLightbulb />, id: generateUniqueId() },
        { label: 'Fashion & Beauty', icon: <MdStyle />, id: generateUniqueId() },
        { label: 'Podcasts', icon: <MdPodcasts />, id: generateUniqueId() },
        { label: 'Browse Channels', icon: <RiAddCircleLine />, id: generateUniqueId() },
    ]

    const moreSection = [
        { label: 'YouTube Premium', icon: <IoLogoYoutube />, id: generateUniqueId() },
        { label: 'YouTube Music', icon: <SiYoutubemusic />, id: generateUniqueId() },
        { label: 'YouTube Kids', icon: <TbBrandYoutubeKids />, id: generateUniqueId() },
    ]

    const settings = [

    ]

    return (
        <aside className="max-w-56 p-2 px-0 max-h-[calc(100vh-70px)] overflow-x-scroll scroller">
            <ul className='px-2 pl-1'>
                {categories?.map((item: CategoryItem, ind: number) => (
                    <>
                        <li key={item.id} className={styles.listStyle}onClick={() => item.path && router.push(item.path)}>
                            <span className="text-2xl">{item.icon}</span>
                            <span className="text-base font-medium tracking-wider">{item.label}</span>
                        </li>
                        {item.label === 'Subscriptions' && <div className="my-2 bg-gray-700 h-[.1px]" />}
                        {item.label === 'Subscriptions' &&
                            <div className='flex items-center px-4 my-2 mb-1 rounded-lg py-2 hover:bg-bgPrimary'>
                                <span className='text-lg mr-1 font-semibold'>You</span>
                                <IoIosArrowForward className="text-sm mt-[4px]" />
                            </div>}
                        {item.label === 'History' && <div className="my-2 bg-gray-700 h-[.1px]" />}
                    </>
                ))}
            </ul>

            <div className='flex items-center px-4 my-2 mb-1 rounded-lg py-2 hover:bg-bgPrimary'>
                <span className='text-lg mr-1 font-semibold'>Subscriptions</span>
            </div>

            <div className='flex items-start justify-center flex-col text-balanced px-6 gap-3 py-1 pb-2'>
                <span>Sign in to like videos, comment, and subscribe.</span>
                <div className='flex items-center gap-5'>
                    <div className='flex items-center border border-gray-600 rounded-3xl p-2 py-1 gap-2'>
                        <PiUserCircle className="text-blue-500 text-[1.7rem]" />
                        <span className='text-blue-500 font-semibold text-base'>Sign in</span>
                    </div>
                </div>
            </div>

            <div className="my-2 bg-gray-700 h-[.1px]" />

            <div className='flex items-center px-4 my-2 mb-1 rounded-lg py-2 hover:bg-bgPrimary'>
                <span className='text-lg mr-1 font-semibold'>Explore</span>
            </div>

            <ul>
                {exploreCategories?.map((item: CategoryItem, ind: number) => (
                    <>
                        <li key={item.id} className={styles.listStyle} >
                            <span className="text-2xl">{item.icon}</span>
                            <span className="text-base font-semibold tracking-wider">{item.label}</span>
                        </li>
                        {item.label === 'Podcasts' && <div className="my-2 bg-gray-700 h-[.1px]" />}
                    </>
                ))}
            </ul>
            <div className="my-2 bg-gray-700 h-[.1px]" />
            <ul>
                {moreSection?.map((item: CategoryItem, ind: number) => (
                    <>
                        <li key={item.id} className={styles.listStyle} >
                            <span className="text-2xl text-red-600">{item.icon}</span>
                            <span className="text-base font-semibold tracking-wider">{item.label}</span>
                        </li>
                    </>
                ))}
            </ul>
            <div className="my-2 bg-gray-700 h-[.1px]" />
        </aside>
    );
};

export default Sidebar;
