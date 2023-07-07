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
        <div className="GRADIENT-CONTAINER h-screen relative flex flex-col lg:flex-row bg-gradient-to-t from-purple-500 to-pink-500">
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
                <div className="absolute inset-4 top-0 lg:top-4 bg-slate-100 rounded-3xl py-5 text-black overflow-hidden">
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




            {/* <div className="flex flex-col lg:flex-row h-full">
                
                <div className="p-3 w-full h-full lg:p-10 lg:pl-0">
                    <div className="WHITECARD w-full h-full bg-slate-100 py-5 rounded-3xl drop-shadow-xl">
                        <div className="w-full h-full overflow-auto scroll-smooth">
                            <div id="Introduction" className="w-full h-full flex flex-col lg:flex-row">
                                <div className="w-1/2 h-full hidden lg:contents">
                                    <div className="w-1/2 h-4/6 lg:h-full relative">
                                        <Image
                                            src={"/icons/businessman2.png"}
                                            layout={"fill"}
                                            alt="Picture of Daniel Kobko"
                                            className="object-contain object-left"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center gap-10">
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <p className="text-4xl lg:text-5xl font-thin">
                                            Hello, my name is 
                                        </p>
                                        <p className="text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-pink-500">Daniel Kobko.</p>
                                    </div>
                                    <div className="w-1/2 flex flex-col xl:flex-row text-5xl gap-5 text-purple-500 items-center">
                                        <div className="flex flex-wrap justify-center gap-4">
                                            <a href="/newhome" className="hover:text-purple-700 ease-in-out duration-300"><AiFillGithub/></a>
                                            <a href="/newhome" className="hover:text-purple-700 ease-in-out duration-300"><AiFillInstagram/></a>
                                            <a href="/newhome" className="hover:text-purple-700 ease-in-out duration-300"><AiFillLinkedin/></a>
                                            <a href="/newhome" className="hover:text-purple-700 ease-in-out duration-300"><AiFillMail/></a>
                                            <a href="/newhome" className="hover:text-purple-700 ease-in-out duration-300"><SiLeetcode/></a>
                                            <a href="/newhome" className="hover:text-purple-700 ease-in-out duration-300"><HiDocumentText/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Education" className="w-full h-full flex flex-wrap gap-4 items-center">
                                <div>

                                </div>
                                {/* {institutions.map((i) => {
                                    return (
                                        <>
                                            <EducationCard
                                                name={i.name}
                                                honor={i.honor}
                                                date={i.date}
                                                location={i.location}
                                                pic={i.pic}
                                            />
                                        </>
                                    );
                                })} 
                            </div>
                            <div id="Projects" className="w-full h-full">
                                Projects
                            </div>
                            <div id="Experience" className="w-full h-full">
                                Experience
                            </div>
                            <div id="Skills" className="w-full h-full">
                                Skills
                            </div>
                        </div>
                    </div>
                </div> 
            </div> */}
        </div>
    );
}