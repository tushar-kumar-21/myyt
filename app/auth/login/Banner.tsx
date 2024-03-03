import React from 'react'
import banner1 from '../../../public/assets/undraw_Media_player_re_rdd2.png';
import banner2 from '../../../public/assets/undraw_Social_networking_re_i1ex.png';
import banner3 from '../../../public/assets/undraw_online_connection_6778.png';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='w-full h-full flex bg-white'>
            <Image
                src={banner1}
                className='h-full min-w-full object-contain'
                alt="ytlogo"
            />
        </div>
    )
}

export default Banner