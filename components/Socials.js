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

export default function Socials() {
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
        // <div className="SOCIALS w-[90%] pb-10 lg:pb-0 lg:pt-100 flex justify-center lg:justify-end flex-wrap items-center text-5xl gap-5 text-slate-400">
        <div className="SOCIALS flex gap-5 text-4xl py-5">
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/dankobko_/">
                <AiFillInstagram className="hover:text-blue-500 ease-in-out duration-200 hover:scale-[110%] hover:cursor-pointer"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/leinad-kobko">
                <AiFillGithub className="hover:text-blue-500 ease-in-out duration-200 hover:scale-[110%] hover:cursor-pointer"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://leetcode.com/danielkobko/">
                <SiLeetcode className="hover:text-blue-500 ease-in-out duration-200 hover:scale-[110%] hover:cursor-pointer"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/daniel-kobko-19a785176/">
                <AiFillLinkedin className="hover:text-blue-500 ease-in-out duration-200 hover:scale-[110%] hover:cursor-pointer"/>
            </a>
            <div className="relative">
                <button 
                    onClick={() => {
                        handleClickOpen();
                    }}
                >
                    <AiFillMail className="hover:text-blue-500 hover:scale-[110%] ease-in-out duration-200 hover:cursor-pointer relative"/>
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
        </div>
    );
}