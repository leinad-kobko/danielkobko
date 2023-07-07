// Next.js
import Image from "next/image";

// react-icons
import {AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai';
import {SiLeetcode} from 'react-icons/si';
import {HiDocumentText} from 'react-icons/hi';

// Material UI 
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Introduction() {

    const smallScreen = useMediaQuery('(min-width:1024px)');

    return (
        <div className="CONTAINER w-full h-full flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
                { smallScreen ?
                    <div className="w-full h-full relative">
                        <Image
                            src={"/icons/businessman2.png"}
                            layout="fill"
                            alt="Picture of Daniel Kobko"
                            className="object-contain object-left"
                        />
                    </div>
                    :
                    <div className="w-[50%] h-[50%] relative">
                        <Image
                            src={"/icons/dk-black.png"}
                            layout="fill"
                            className="object-contain"
                        />
                    </div>
                }
            </div>
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-between items-center">
                <div className="GREETING h-[80%] flex flex-col lg:justify-center lg:items-center text-3xl lg:text-5xl font-thin">
                    <p>Hello my name is</p>
                    <p className="font-semibold text-pink-500">Daniel Kobko.</p>
                </div >
                <div className="SOCIALS w-full flex justify-center px-5">
                    <div className="m-2 flex flex-wrap justify-center gap-4 text-5xl text-slate-100 bg-purple-500 p-5 rounded-3xl">
                        <a href="https://github.com/leinad-kobko" className="hover:text-pink-200 ease-in-out duration-300"><AiFillGithub/></a>
                        <a href="https://www.instagram.com/dankobko_/" className="hover:text-pink-200 ease-in-out duration-300"><AiFillInstagram/></a>
                        <a href="https://www.linkedin.com/in/daniel-kobko-19a785176/" className="hover:text-pink-200 ease-in-out duration-300"><AiFillLinkedin/></a>
                        <a href="mailto:danielkobko@gmail.com" className="hover:text-pink-200 ease-in-out duration-300"><AiFillMail/></a>
                        <a href="https://leetcode.com/danielkobko/" className="hover:text-pink-200 ease-in-out duration-300"><SiLeetcode/></a>
                        <div className="hover:text-pink-200 ease-in-out duration-300"><HiDocumentText/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}