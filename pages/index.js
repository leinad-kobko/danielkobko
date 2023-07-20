import Image from "next/image";
import NavBar from "../components/NavBar";
import useMediaQuery from '@mui/material/useMediaQuery';
import {RiCloseFill, RiMenu5Fill} from 'react-icons/ri';
import {AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai';
import {SiLeetcode} from 'react-icons/si';
import {HiDocumentText} from 'react-icons/hi';
import Introduction from "../components/Introduction";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { nav_items } from "../components/NavBar";
import Head from "next/head";

import { useState } from "react";

export default function NewHome() {
    const smallScreen = useMediaQuery('(min-width:1024px)');
    const navActive = "hidden";

    const [menuOpen, setMenuOpen] = useState(" hidden");

    const handleMenu = () => {
        menuOpen == " opacity-[100%]" ? setMenuOpen(" opacity-[0%] hidden") : setMenuOpen(" opacity-[100%]");
    };

    return (
        <div className="GRADIENT-CONTAINER h-screen lg:h-full relative flex flex-col lg:flex-row bg-gradient-to-t from-purple-500 to-pink-500">
            <Head><title>Daniel Kobko</title></Head>
            {smallScreen ?
                <NavBar/>
                :
                <div className="NAV-CONTAINER h-16 flex justify-center items-center">
                    <button onClick={handleMenu}>
                        <div className="flex gap-3 text-3xl text-slate-100 font-thin">
                            <RiMenu5Fill/>
                            <p className="text-xl">Menu</p>
                        </div>
                    </button>
                    <div className={"z-40 absolute top-0 left-0 bg-gradient-to-t from-purple-500 to-pink-500 w-full h-screen" + menuOpen}>
                        <div className="NAV-CONTAINER h-16 flex justify-center items-center">
                            <button onClick={handleMenu}>
                                <div className="flex gap-3 text-3xl text-slate-100 font-thin">
                                    <RiCloseFill/>
                                    <p className="text-xl">Close Menu</p>
                                </div>
                            </button>
                        </div>
                        <ul className="w-full h-[80%] flex flex-col justify-center items-center">
                            {nav_items.map((item) => {
                                return(
                                    <li key={item} className="">
                                        <button className="px-10 py-5 hover:bg-slate-100/20 text-slate-100 text-2xl font-thin" href={"#" + item} onClick={handleMenu}>
                                            <a  href={"#" + item}>{item}</a>
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            }
            <div className="flex-1 relative">
                <div className="absolute inset-4 top-0 lg:top-4 bg-slate-100 rounded-3xl text-black overflow-hidden">
                    <div className="w-full h-full overflow-x-hidden overflow-y-auto scroll-smooth">
                        <div id="Introduction" className="w-full min-h-screen flex justify-center items-center">
                            <Introduction/>
                        </div>
                        <div id="Education" className="w-full flex justify-center lg:justify-start items-center">
                            <Education/>
                        </div>
                        <div id="Experience" className="w-full flex justify-center items-center">
                            <Experience/>
                        </div>
                        <div id="Projects" className="w-full flex justify-center items-center">
                            <Projects/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}