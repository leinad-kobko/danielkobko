import Image from "next/image";
import { BsChat } from "react-icons/bs";
import { RiFileUserFill } from "react-icons/ri";

export default function Introduction() {
    return (
        <div className="flex flex-col justify-center items-center pt-10 gap-10 mt-10">
            <div className="flex flex-wrap items-center justify-center gap-10 pb-5 border-b border-gray-200 dark:border-gray-700">
                <div className="z-10 w-48 h-48 relative rounded-full overflow-hidden">
                    <Image
                        src="/icons/newspiffy.jpg"
                        layout="fill"
                        alt="Picture of Daniel Kobko"
                        className="z-0 object-cover object-top scale-[140%] -translate-y-7 translate-x-4"
                    />
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <p className="text-5xl lg:text-6xl font-bold">Hi, {"I\'m"} <span className="text-blue-500">Dan</span>.</p>
                    <p className="text-xl text-center sm:text-left">Full Stack Web Developer</p>
                    <a target="_blank" rel="noreferrer" href="/pdf/resume" 
                    className="mt-5 w-fit flex gap-3 items-center py-2 px-5 bg-blue-500 hover:bg-blue-600 rounded-full text-white">
                        <RiFileUserFill className="text-2xl"/>
                        <p>Resume</p>
                    </a>
                </div>
            </div>
            <div>
                <p className="max-w-3xl text-center p-5 lg:p-0">{"I\'m"} a passionate programmer that loves to create clean & responsive designs. I try to learn something new with each project I make and strive to create a product that is better than what I was asked for.</p>
            </div>
            <div className="BUTTONAREA flex flex-wrap justify-center items-center gap-5 text-2xl px-10 my-10 mb-10">
                <p className="">Want to chat?</p>
                <a target="_blank" rel="noreferrer" href="https://cal.com/danielkobko/meet" className="flex justify-center items-center gap-4 py-3 px-10 rounded-lg bg-blue-500 text-white hover:bg-blue-600 hover:dark:bg-blue-600 ease-in duration-100">
                    <BsChat/>
                    <p>Connect</p>
                </a>
            </div>
        </div>
    );
}