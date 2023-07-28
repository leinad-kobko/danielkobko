// Components
import SkillBox from "./SkillBox";

// react-icons
import { AiOutlineGithub } from "react-icons/ai";
import {DiCss3, DiJava, DiDatabase} from "react-icons/di"
import {TiHtml5} from "react-icons/ti"
import {FaPython, FaReact, FaFigma, FaNode} from "react-icons/fa"
import {SiJavascript, SiNginx, SiAdobephotoshop, SiTailwindcss, SiMui, SiVercel} from "react-icons/si"
import {TbBrandNextjs} from "react-icons/tb"
import { BsUnity } from "react-icons/bs";

// React
import React, { useState } from 'react';

export default function Skills() {
    const [currSkill, setCurrSkill] = useState(" ");

    return (
        <div className="w-full h-full">
            <div className="flex flex-wrap gap-3 text-black dark:text-slate-100 font-thin text-3xl pb-10">
                <h1>{"What I learned in the process: " + currSkill}</h1>
            </div>
            <div id="skillcontainer" className="SKILLS w-full h-[80%] lg:h-[90%] flex flex-wrap justify-center overflow-hidden border border-slate-400 rounded-lg">
                <SkillBox setFunc={setCurrSkill} name="Java" textcolour={"text-blue-700"}>
                    <DiJava/>
                </SkillBox>

                <SkillBox setFunc={setCurrSkill} name="Python" bgcolour={"bg-yellow-600"}>
                    <FaPython/>
                </SkillBox>

                <SkillBox setFunc={setCurrSkill} name="Photoshop" bgcolour={"bg-blue-200"} textcolour={"text-blue-600"}>
                    <SiAdobephotoshop/>
                </SkillBox>
                
                <SkillBox setFunc={setCurrSkill} name="JavaScript" bgcolour={"bg-yellow-400"}>
                    <SiJavascript/>
                </SkillBox>

                <SkillBox setFunc={setCurrSkill} name="Github" bgcolour={"bg-purple-700"}>
                    <AiOutlineGithub/>
                </SkillBox>

                <SkillBox setFunc={setCurrSkill} name="React" bgcolour={"bg-blue-300"}>
                    <FaReact/>
                </SkillBox>
                
                <SkillBox setFunc={setCurrSkill} name="Figma" bgcolour={"bg-red-500"}>
                    <FaFigma/>
                </SkillBox>
                
                <SkillBox setFunc={setCurrSkill} name="Nginx" bgcolour={"bg-green-600"}>
                    <SiNginx/>
                </SkillBox>
                
                <SkillBox setFunc={setCurrSkill} name="SQL" bgcolour={"bg-orange-400"}>
                    <DiDatabase/>
                </SkillBox>
                
                <SkillBox setFunc={setCurrSkill} name="NextJS" textcolour={"text-slate-900"}>
                    <TbBrandNextjs/>
                </SkillBox>
                
                <SkillBox setFunc={setCurrSkill} name="TailwindCSS" textcolour={"text-blue-400"}>
                    <SiTailwindcss/>
                </SkillBox>
                
                <SkillBox setFunc={setCurrSkill} name="MUI" bgcolour={"bg-blue-400"}>
                    <SiMui/>
                </SkillBox>
                
                <SkillBox setFunc={setCurrSkill} name="Vercel" textcolour={"text-slate-900"}>
                    <SiVercel/>
                </SkillBox>
                
                <SkillBox setFunc={setCurrSkill} name="NodeJS" bgcolour={"bg-green-700"}>
                    <FaNode/>
                </SkillBox>
                
                <SkillBox setFunc={setCurrSkill} name="Unity" bgcolour={"bg-slate-700"}>
                    <BsUnity/>
                </SkillBox>

                <SkillBox setFunc={setCurrSkill} name="HTML" bgcolour={"bg-orange-600"}>
                    <TiHtml5/>
                </SkillBox>

                <SkillBox setFunc={setCurrSkill} name="CSS" bgcolour={"bg-blue-500"}>
                    <DiCss3/>
                </SkillBox>
                
                
            </div>
        </div>
    );
}