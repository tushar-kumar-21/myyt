import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    return (
        <header className="shadow-md py-5 px-5">
            <div className="flex items-center gap-6">
                <RxHamburgerMenu className="text-xl text-textSecondary" />
                <Image
                src={'https://www.gstatic.com/youtube/img/creator/yt_studio_logo_white.svg'}
                height={100}
                width={100}
                alt="#"
                />
            </div>
        </header>
    )
}

export default Header;