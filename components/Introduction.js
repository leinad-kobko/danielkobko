// Next.js
import Image from "next/image";

// react-icons
import {AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai';
import {SiLeetcode} from 'react-icons/si';
import {HiDocumentText} from 'react-icons/hi';

// Material UI 
import useMediaQuery from '@mui/material/useMediaQuery';
import StylizedBox from "./StylizedBox";

// Components
import TLItem from "./TLItem";

export default function Introduction() {

    const smallScreen = useMediaQuery('(min-width:1024px)');

    const institutions = [
        {
            name: "Udemy",
            date: "2019-Present",
            pic: "/icons/cibc.png"
        },
        {
            name: "University of Guelph",
            honor: "Honours B.S. (Computing - CS)",
            date: "2019-2023",
            location: "Guelph, ON.",
            pic: "/icons/gue.png"
        },
        {
            name: "St. Thomas Aquinas",
            honor: "Ontario Scholar",
            date: "2015-2019",
            location: "Oakville, ON.",
            pic: "/icons/STA.png"
        },
    ];

    const socials = [
        <AiFillGithub/>,
        <AiFillInstagram/>,
        <AiFillLinkedin/>,
        <AiFillMail/>,
        <SiLeetcode/>,
        <HiDocumentText/>
    ];

    return (
        <div className="CONTAINER w-full h-full flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center gap-10">
                <div className="GREETING text-4xl lg:text-6xl flex gap-2 font-thin">
                    <p>Hi! I'm</p>
                    <p className="font-semibold text-pink-500">Dan.</p>
                </div>
                <StylizedBox
                    width="w-[85%] lg:w-1/2"
                    height="h-96 lg:h-1/2"
                    bordersize="4"
                    bordercolour="pink-500"
                    textcolour="pink-500"
                    spacerwidth="w-10"
                    spacerheight="h-10"
                > 
                    <div className="w-full h-full relative">
                        <Image
                            src={"/icons/spiffy.png"}
                            layout="fill"
                            alt="Picture of Dan"
                            className="object-contain"
                        />
                    </div>
                </StylizedBox>
                <button className="HIREBUTTON bg-pink-500 py-3 px-10 ease-in-out duration-300 hover:bg-pink-700 cursor-pointer">
                    <p className="text-slate-100 text-2xl">Hire Me</p>
                </button>
            </div>
            <div className="w-full lg:w-[40%] lg:h-[90%] bg-pink-500 flex flex-col justify-between">
                <div className="w-full flex justify-center">
                    <div className="TIMELINE w-full lg:w-1/2 h-full flex justify-center">
                        <ol className="relative border-l pt-10 border-pink-300">                  
                            {institutions.map((i, idx) => {
                                return(
                                    <TLItem
                                        key={idx}
                                        name={i.name}
                                        honor={i.honor}
                                        date={i.date}
                                        location={i.location}
                                        pic={i.pic}
                                    />
                                );
                            })}
                        </ol>
                    </div>
                </div>
                <div className="w-full py-10 flex flex-wrap gap-5 justify-center items-center text-5xl text-slate-100">
                    <AiFillGithub className="hover:text-pink-300 ease-in-out duration-300 cursor-pointer"/>
                    <AiFillInstagram className="hover:text-pink-300 ease-in-out duration-300 cursor-pointer"/>
                    <AiFillLinkedin className="hover:text-pink-300 ease-in-out duration-300 cursor-pointer"/>
                    <AiFillMail className="hover:text-pink-300 ease-in-out duration-300 cursor-pointer"/>
                    <SiLeetcode className="hover:text-pink-300 ease-in-out duration-300 cursor-pointer"/>
                    <HiDocumentText className="hover:text-pink-300 ease-in-out duration-300 cursor-pointer"/>
                </div>
            </div>
        </div>
    );
}