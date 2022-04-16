import React from "react";

import Image from "next/image";
import me from '../icons/Profile.png'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { DiGithubBadge } from 'react-icons/di';
import { BsLinkedin } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { SiLeetcode } from 'react-icons/si';
import { Grid } from "@mui/material";

const SocialsCard = () => {
    const secondary_colour = "#6a82fb";
    const buttoneffects = "transition ease-in-out hover:scale-105 hover:fill-blue-600 duration-300";

    return (
        <>
            <div id="me-card" className="mb-4 w-1/2 bg-white flex flex-row">
                <div id="imageArea" className="w-1/2 py-10 h-full bg-gradient-to-bl from-blue-100 to-red-100 flex flex-col justify-center">
                    <Image
                        alt="me.png"
                        src={me}
                        layout="intrinsic"
                        width={900*0.15}
                        height={900*0.15}
                        border="2px solid black"
                        className="object-contain"
                    />
                    <p className="py-10 text-xl lg:text-2xl font-bold text-red-400 text-center">Software Developer</p>
                </div>
                <div id="socials" className="w-1/2 py-10 h-full bg-white">
                    <Grid container>
                        <LinkButton href="https://github.com/leinad-kobko">
                            <DiGithubBadge size="60" color={secondary_colour} className={buttoneffects}/>
                        </LinkButton>
                        <LinkButton href="https://www.linkedin.com/in/daniel-kobko-19a785176/">
                            <BsLinkedin size="35" color={secondary_colour} className={buttoneffects}/>
                        </LinkButton>
                        <LinkButton href="mailto:danielkobko@gmail.com">
                                <HiMail size="50" color={secondary_colour} className={buttoneffects}/>
                            </LinkButton>
                        <LinkButton href="https://www.instagram.com/dankobko_/">
                            <AiFillInstagram size="40" color={secondary_colour} className={buttoneffects}/>
                        </LinkButton>
                        <LinkButton href="https://leetcode.com/danielkobko/">
                            <SiLeetcode size="40" color={secondary_colour} className={buttoneffects}/>
                        </LinkButton>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default SocialsCard;

const LinkButton = ({ children, href }) => {
    return (
        <Grid item xs={4} display="flex" justifyContent="center" paddingY="10%" alignItems={"center"}>
            <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href={href}
            >
                {children}
            </a>
        </Grid>
    )
}
