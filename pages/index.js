import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import me from '../icons/Profile.png'
import github from '../icons/github.png'
import { DiGithubBadge } from 'react-icons/di';
import { BsLinkedin } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';


export default function Home() {
    const secondary_colour = "#6a82fb";
    const buttoneffects = "transition ease-in-out hover:scale-105 hover:fill-blue-600 duration-300"

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
                <div id="content" className="flex flex-col md:w-1/2 items-center">
                    <div>
                        <div id="intro-text">
                            <p className="font-['Courier'] text-4xl lg:text-5xl text-blue-500">{"> Hello World."}</p>
                            <p className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-blue-400 to-red-500">{"I'm Daniel Kobko"}</p>
                        </div>
                        <div className="flex justify-center py-3">
                            
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