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

export default function Home() {
    const secondary_colour = "#6a82fb";
    const buttoneffects = "transition ease-in-out hover:scale-105 hover:fill-blue-600 duration-300"
    const [carouselSlide, setCarouselSlide] = React.useState(0);

    return (
        <Layout>
            <Head>
                <title>Home - Daniel Kobko</title>
            </Head>
            <div 
                id="content-wrapper" 
                className="h-full flex-col flex content-stretch lg:justify-between lg:flex-row items-center"
            >
                <div id="card-area" className="flex justify-center w-1/2">
                    <div id="me-card" className="w-64 h-72 my-10">
                        <div id="imageArea" className="h-5/6 bg-gradient-to-bl from-blue-100 to-red-100 flex flex-col justify-center">
                            <Image
                                alt="me.png"
                                src={me}
                                layout="intrinsic"
                                width={900*0.15}
                                height={900*0.15}
                                border="2px solid black"
                                className="object-contain"
                            />
                            <p className="text-xl lg:text-2xl font-bold text-red-400 text-center">Software Developer</p>
                        </div>
                        <div id="links" className="h-1/6 bg-white flex">
                            <div 
                                id="link-buttons"
                                className="flex items-center justify-center w-full space-x-10"
                            >
                                <div id="github-button">
                                    <LinkButton href="https://github.com/leinad-kobko">
                                        <DiGithubBadge size="40" color={secondary_colour} className={buttoneffects}/>
                                    </LinkButton>
                                </div>
                                <LinkButton href="https://www.linkedin.com/in/daniel-kobko-19a785176/">
                                    <BsLinkedin size="30" color={secondary_colour} className={buttoneffects}/>
                                </LinkButton>
                                <LinkButton href="mailto:danielkobko@gmail.com">
                                    <HiMail size="40" color={secondary_colour} className={buttoneffects}/>
                                </LinkButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content" className="flex flex-col md:w-1/2 md:max-w-1/2 items-center">
                    <div>
                        <div id="intro-text" className="text-center">
                            <p className="font-['Courier'] text-4xl lg:text-5xl text-blue-500">{"> Hello World."}</p>
                            <p className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-blue-400 to-red-500">{"I'm Daniel Kobko"}</p>
                        </div>
                        <div id="about-me-carousel" className="w-full px-10 h-48 my-10 flex flex-row">
                            <div 
                                id="left-button"  
                                className="w-fill flex items-center"
                            >
                                <FaChevronCircleLeft onClick={()=>setCarouselSlide(Math.max(0, (carouselSlide-1)))} size="30" color={secondary_colour} className={buttoneffects + " hover:cursor-pointer"}/>
                            </div>
                            <div id="carousel-content" className="px-10">
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
                                {/* {carouselSlide == 3 && 
                                    <div className="w-fill flex flex-col items-center">
                                        <p className="text-xl font-bold text-red-400">Hobbies</p>
                                        <p>{"I know Python, JS, and C."}</p>
                                    </div>
                                } */}
                            </div>
                            <div 
                                id="right-button" 
                                className="w-fill flex items-center"
                            >
                                <FaChevronCircleRight size="30" onClick={()=>setCarouselSlide(Math.min(2, (carouselSlide+1)))} color={secondary_colour} className={buttoneffects + " hover:cursor-pointer"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const LinkButton = ({ children, href }) => {
    return (
        <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href={href}
        >
            {children}
        </a>
    )
}