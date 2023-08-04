// Next.js
import Image from "next/image";

// react-icons
import {AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillMail, AiFillCloseCircle} from 'react-icons/ai';
import {SiLeetcode} from 'react-icons/si';
import {HiDocumentText} from 'react-icons/hi';
import {RiFileUserFill} from 'react-icons/ri';

// Components
import { BsChat } from "react-icons/bs";
import { useState } from "react";
import ButtonModal from "./ButtonModal";

export default function Introduction() {

    const [open, setOpen] = useState(false);
    const [copyConfirm, setCopyConfirm] = useState(" hidden");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCopyConfirm(" hidden");
    }

    const [tooltip, setTooltip] = useState("Click to copy g-mail");
    const [tooltipOpacity, setTooltipOpacity] = useState(" opacity-0");

    const handleMail = () => {
        navigator.clipboard.writeText("danielkobko@gmail.com");
    }

    return (
        <div className="CONTAINER w-full min-h-[90vh] flex flex-col lg:flex-row justify-center items-center">
            <div className="IMAGECONTENT w-full flex justify-center items-center">
                <div className="mt-5 w-64 h-80 lg:scale-[140%] xl:scale-[175%] ease-in-out duration-100 relative overflow-hidden bg-slate-100 rounded-[6rem]">
                    <Image
                        src={"/icons/newspiffy.jpg"}
                        layout="fill"
                        alt="a picture of Daniel Kobko"
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="INTROCONTENT min-h-[60vh] px-5 w-full flex flex-col justify-between items-center">
                <div className="GREETING py-5 flex flex-wrap gap-5 pb-10">
                    <p className="text-4xl lg:text-6xl font-semibold text-pink-500 dark:text-pink-400">{"> Hi, I'm Dan."}</p>
                    <p className="text-lg font-thin text-black dark:text-slate-100">{"I'm a passionate programmer that loves to create clean & responsive designs. I try to learn something new with each project I make and strive to create a product that is better than what I was asked for."}</p>
                </div>
                <div className="BUTTONAREA flex flex-wrap justify-center items-center gap-4 text-2xl font-thin pb-20">
                    <p className="text-black dark:text-slate-100">Want to chat?</p>
                    <a target="_blank" rel="noreferrer" href="https://cal.com/danielkobko/meet" className="py-3 px-10 rounded-lg bg-pink-500 dark:bg-pink-400 text-slate-100 flex justify-center items-center gap-4 hover:bg-pink-600 hover:dark:bg-pink-500 ease-in duration-100">
                        <BsChat/>
                        <p>Connect</p>
                    </a>
                </div>
                <div className="SOCIALS w-[90%] pb-10 lg:pb-0 lg:pt-100 flex justify-center lg:justify-end flex-wrap items-center text-5xl gap-5 text-slate-400">
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/dankobko_/">
                        <AiFillInstagram className="hover:text-pink-800 hover:dark:text-pink-400 ease-in-out duration-200 hover:scale-[110%] hover:cursor-pointer"/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/leinad-kobko">
                        <AiFillGithub className="hover:text-pink-800 hover:dark:text-pink-400 ease-in-out duration-200 hover:scale-[110%] hover:cursor-pointer"/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://leetcode.com/danielkobko/">
                        <SiLeetcode className="hover:text-pink-800 hover:dark:text-pink-400 ease-in-out duration-200 hover:scale-[110%] hover:cursor-pointer"/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/daniel-kobko-19a785176/">
                        <AiFillLinkedin className="hover:text-pink-800 hover:dark:text-pink-400 ease-in-out duration-200 hover:scale-[110%] hover:cursor-pointer"/>
                    </a>
                    <div className="relative">
                        <p className={"absolute w-[12rem] text-center bottom-[120%] left-[-150%] bg-slate-900 px-5 text-slate-100 text-sm rounded-md transition-opacity ease-in-out duration-200" + tooltipOpacity}>
                            {tooltip}
                        </p>
                        <button 
                            onClick={() => {
                                handleClickOpen();
                            }}
                        >
                            <AiFillMail className="hover:text-pink-800 hover:dark:text-pink-400 hover:scale-[110%] ease-in-out duration-200 hover:cursor-pointer relative"/>
                        </button>
                        <ButtonModal
                            open={open}
                            close={handleClose}
                            imgref={"/icons/gmail.png"}
                            title={"Dan\'s G-mail"}
                        >
                            <p className={"w-full text-center py-3 text-green-700" + copyConfirm}>Mail copied to clipboard</p>
                            <button 
                                onClick={()=>{
                                    handleMail()
                                    setCopyConfirm("")
                                }}
                                className="w-full text-center py-5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-slate-100"
                            >
                                Click to copy gmail to clipboard
                            </button>
                        </ButtonModal>
                    </div>
                    <a target="_blank" rel="noreferrer" href="/pdf/resume">
                        <RiFileUserFill className="hover:text-pink-800 hover:dark:text-pink-400 hover:scale-[110%] ease-in-out duration-200 hover:cursor-pointer"/>
                    </a>
                </div>
            </div>
        </div>
    );
}