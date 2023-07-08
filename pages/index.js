import Image from "next/image";
import NavBar from "../components/NavBar";
import useMediaQuery from '@mui/material/useMediaQuery';
import {RiMenu5Fill} from 'react-icons/ri';
import {AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai';
import {SiLeetcode} from 'react-icons/si';
import {HiDocumentText} from 'react-icons/hi';
import Introduction from "../components/Introduction";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function NewHome() {
    const smallScreen = useMediaQuery('(min-width:1024px)');
    const navActive = "hidden";

    return (
        <div className="GRADIENT-CONTAINER h-screen lg:h-full relative flex flex-col lg:flex-row bg-gradient-to-t from-purple-500 to-pink-500">
            {smallScreen ?
                <NavBar/>
                :
                <div className="NAV-CONTAINER h-16 flex justify-center items-center">
                    <button>
                        <div className="flex gap-3 text-3xl text-slate-100 font-thin">
                            <RiMenu5Fill/>
                            <p className="text-xl">Menu</p>
                        </div>
                    </button>
                </div>
            }
            <div className="flex-1 relative">
                <div className="absolute inset-4 top-0 lg:top-4 bg-slate-100 rounded-3xl py-5 lg:py-0 lg:px-5 text-black overflow-hidden">
                    <div className="w-full h-full overflow-y-auto scroll-smooth">
                        <div id="Introduction" className="w-full h-full flex justify-center items-center">
                            <Introduction/>
                        </div>
                        <div id="Education" className="w-full min-h-full flex justify-center items-center">
                            <Education/>
                        </div>
                        <div id="Projects" className="w-full h-full flex justify-center items-center">
                            <Projects/>
                        </div>
                        <div id="Skills" className="w-full h-full flex justify-center items-center">
                            <Skills/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}