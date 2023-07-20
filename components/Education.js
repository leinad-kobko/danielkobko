import SkillBox from "./SkillBox";
import Skills from "./Skills";
import TLItem from "./TLItem";
import Image from "next/image";
import { FaPython } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";

export default function Education() {
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

    return (
        <div className="w-full lg:w-[90%] h-full bg-purple-500 flex flex-col">
            <div className="CONTENT w-full h-full flex flex-wrap">                
                <div className="TIMELINE w-full lg:w-1/2 h-full flex flex-col justify-center items-center">
                    <p className="py-10 text-4xl text-slate-100 font-thin px-20">Education</p>
                    <ol className="relative border-l border-pink-300">                  
                        <TLItem
                            name={"Udemy"}
                            date={"2019-Present"}
                        >
                            <div className="DIALOG p-10">
                                <p>Hello World!</p>
                            </div>
                        </TLItem>
                        <TLItem
                            name={"University of Guelph"}
                            honor={"Honours B.S. (Computing - CS)"}
                            date={"2019-2023"}
                        >
                            <div className="DIALOG">
                                <div className="p-10">
                                    <div className="flex flex-wrap justify-center items-center gap-8 border-b pb-5">
                                        <div className="IMG relative w-32 h-32">
                                            <Image
                                                src={"/icons/gue.png"}
                                                layout={"fill"}
                                                alt="Saint Thomas Aquinas logo"
                                                className="object-contain"
                                            />
                                        </div>
                                        <p className="TITLE text-xl lg:text-3xl font-semibold">University of Guelph</p>
                                    </div>
                                    <p className="DESC"></p>
                                    <div className="py-5">
                                        <p className="text-lg text-blue-600">Achievements</p>
                                        <ul className="list-disc pl-5">
                                            <li>{"3.7 GPA"}</li>
                                            <li>{"23 Computer Science courses (83% average)"}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full flex flex-wrap justify-center items-center">
                                    <a target="_blank" rel="noreferrer" href="/pdf/transcript"
                                        className="w-full lg:w-1/2 flex justify-center items-center p-5 bg-slate-100 hover:bg-slate-300 border"
                                    >
                                        <p>Transcript</p>
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="/pdf/schedule"
                                        className="w-full lg:w-1/2 flex justify-center items-center p-5 bg-slate-100 hover:bg-slate-300 border"
                                    >
                                        <p>Degree Schedule</p>
                                    </a>
                                </div>
                            </div>
                        </TLItem>
                        <TLItem
                            name={"St. Thomas Aquinas"}
                            honor={"Ontario Scholar"}
                            date={"2015-2019"}
                        >
                            <div className="DIALOG p-10">
                                <div className="flex flex-wrap justify-center items-center gap-4 border-b pb-5">
                                    <div className="IMG relative w-32 h-32">
                                        <Image
                                            src={"/icons/STA.png"}
                                            layout={"fill"}
                                            alt="Saint Thomas Aquinas logo"
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="TITLE text-xl lg:text-3xl font-semibold">St. Thomas Aquinas</p>
                                </div>
                                <p className="DESC"></p>
                                <div className="py-5">
                                    <p className="text-lg text-blue-600">Achievements</p>
                                    <ul className="list-disc pl-5">
                                        <li>{"Ontario Scholars Award (>80% in every year)"}</li>
                                        <li>{"Award for Grade 11 Computer Science"}</li>
                                        <li>{"Co-Founder of Computer Science Club"}</li>
                                        <li>{"Award for Grade 11 Communication Technology (Graphic Design)"}</li>
                                        <li>{"ECOO 2019 round 2 contestant"}</li>
                                    </ul>
                                </div>
                            </div>
                        </TLItem>
                    </ol>
                </div>
                <div className="SKILLSLEARNED w-full lg:w-1/2 h-full p-10 justify-center items-center">
                    <Skills/>
                </div>
            </div>
        </div>
    );
}