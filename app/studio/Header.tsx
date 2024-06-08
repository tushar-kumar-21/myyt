import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { PiQuestion } from "react-icons/pi";
import { BiVideoPlus } from "react-icons/bi";

const Header = () => {
    return (
        <header className="shadow-md py-[14px] px-5 flex justify-between h-[64px]">
            <div className="flex items-center gap-6">
                <RxHamburgerMenu className="text-xl text-textSecondary" />
                <div>
                    <Image
                        src={'https://www.gstatic.com/youtube/img/creator/yt_studio_logo_white.svg'}
                        height={100}
                        width={100}
                        alt="#"
                    />
                </div>
            </div>
            <div className="border border-greyColor rounded-[4px] flex px-4 py-[5px] gap-5 basis-2/5">
                <IoIosSearch className="text-2xl text-greyColor" />
                <input type="text" placeholder="Search across your channel" className="bg-transparent placeholder:text-greyColor font-bold w-full" />
            </div>
            <div className="flex items-center gap-4">
                <PiQuestion className="text-2xl text-textSecondary" />
                <div className="flex border border-bgSecondary items-center px-2 gap-2 py-1 rounded-sm">
                    <BiVideoPlus className="text-2xl text-textPrimary" />
                    <span className="font-semibold text-sm tracking-wide">CREATE</span>
                </div>
                <div className="h-8 w-8 bg-red-500 rounded-full">
                    <img src="" alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header;