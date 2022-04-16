import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import me from '../icons/Profile.png'
import github from '../icons/github.png'
import { DiGithubBadge } from 'react-icons/di';
import { BsLinkedin } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import SocialsCard from "../components/SocialsCard";
import SocialsCardMobile from "../components/SocialsCardMobile";
import useMediaQuery from '@mui/material/useMediaQuery';
import Education from "../components/Education";
import Work from "../components/Work";

export default function Home() {
    const secondary_colour = "#6a82fb";
    const buttoneffects = "transition ease-in-out hover:scale-105 hover:fill-blue-600 duration-300"
    const carouselSlideCount = 3 - 1;
    const [carouselSlide, setCarouselSlide] = React.useState(0);

    const onLeftCarouselClick = () => {
        let newVal = carouselSlide;
        newVal -= 1;
        newVal = newVal < 0 ? carouselSlideCount : newVal;
        setCarouselSlide(newVal); 
    }

    const onRightCarouselClick = () => {
        let newVal = carouselSlide;
        newVal += 1;
        newVal = newVal > carouselSlideCount ? 0 : newVal;
        setCarouselSlide(newVal); 
    }

    const smallScreen = useMediaQuery('(min-width:1025px)');

    return (
        <Layout>
            <Head>
                <title>Daniel Kobko</title>
            </Head>
            <div 
                id="content-wrapper" 
                className="h-full flex-col flex content-stretch lg:justify-between items-center mt-16"
            >
                <div id="intro-text" className="text-center pb-20">
                    <p className="font-['Courier'] text-4xl lg:text-5xl text-blue-500">{"> Hello World."}</p>
                    <p className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-blue-400 to-red-500">{"I'm Daniel Kobko"}</p>
                </div>
                <div id="card-area" className="flex justify-center w-full">
                    {smallScreen ? <SocialsCard/> : <SocialsCardMobile/>}
                    {/* <SocialsCardMobile/> */}
                </div>
                <div id="content" className="flex flex-col md:w-1/2 md:max-w-1/2 items-center">
                    <div>
                        {/* <div id="intro-text" className="text-center">
                            <p className="font-['Courier'] text-4xl lg:text-5xl text-blue-500">{"> Hello World."}</p>
                            <p className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-blue-400 to-red-500">{"I'm Daniel Kobko"}</p>
                        </div> */}
                        <div id="about-me-carousel" className="w-full px-10 h-48 my-10 flex flex-row">
                            <div 
                                id="left-button"  
                                className="w-fill flex items-center"
                            >
                                <FaChevronCircleLeft onClick={onLeftCarouselClick} size="30" color={secondary_colour} className={buttoneffects + " hover:cursor-pointer"}/>
                            </div>
                            <div id="carousel-content" className="px-10 overflow-auto">
                                {carouselSlide == 0 && 
                                    <div className="w-fill flex flex-col items-center">
                                        <p className="text-xl font-bold text-red-400">About Me</p>
                                        <p>{"I'm a 3rd year Bachelor of Computing student at the University of Guelph. Currently I do software development but hope to get into data science."}</p>
                                    </div>
                                }
                                {carouselSlide == 1 && 
                                    <div className="w-fill flex flex-col items-center">
                                        <p className="text-xl font-bold text-red-400">Skills</p>
                                        <p>{"I know Python, JS, and C. During my schooling, I have also worked with databases, cryptography, and AI."}</p>
                                    </div>
                                }
                                {carouselSlide == 2 && 
                                    <div className="w-fill flex flex-col items-center">
                                        <p className="text-xl font-bold text-red-400">Hobbies</p>
                                        <p>{"I like games and as nerdy as it sounds, I code a lot in my spare time as well."}</p>
                                    </div>
                                }
                            </div>
                            <div 
                                id="right-button" 
                                className="w-fill flex items-center"
                            >
                                <FaChevronCircleRight size="30" onClick={onRightCarouselClick} color={secondary_colour} className={buttoneffects + " hover:cursor-pointer"}/>
                            </div>
                        </div>
                        <div id="education" className="w-fill">
                            <Education/>
                        </div>
                        <div id="work" className="w-fill">
                            <Work/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}