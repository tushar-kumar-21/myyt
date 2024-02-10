'use client';

const SignInPopUp = () => {
    return (
        <div className="absolute -bottom-20 -left-[280px] border  p-4 rounded-lg w-[300px] bg-bgGreyPop">
            <div className="flex justify-start w-full items-start gap-4">

                <img
                    src="https://yt3.ggpht.com/XBRoQ7Se95lnwEOI6BzFQrYw7IG2KBwp2SHIqfueEciGPMqUkHk_ULWcii7gu-FFTO9Wme8Aew=s108-c-k-c0x00ffffff-no-rj"
                    className="w-10 h-10 rounded-full"
                    alt="p"
                />

                <div className="text-white flex flex-col font-semibold text-lg gap-0 leading-5">
                    <span>tushar kumar</span>
                    <span>@tusharkumar-dw1qc</span>
                    <span className="text-base text-bluePrimary leading-8">View your channel</span>
                </div>

            </div>

            <div>

            </div>

        </div>
    )
}

export default SignInPopUp