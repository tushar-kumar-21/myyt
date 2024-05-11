
import Image from 'next/image'
import HomeScroller from './components/HomeScroller'
import VideoYts from './components/common/VideoYts'
import Header from './components/headerItems/Header'
import Sidebar from './components/sidebarItems/Sidebar'
import DashboardLayout from './dashboard/layout'
import Page from './dashboard/page'


export default function Home() {

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
        <section>
          
        </section>
    )
}
