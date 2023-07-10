// react-icons
import Image from "next/image";
import {AiFillGithub, AiOutlineEye} from "react-icons/ai"

function ProjectCard({imgsrc, date, title, description, projref, gitref}) {
    return (
        <div className="w-80 bg-slate-100 shadow-lg rounded-lg overflow-hidden">
            <div className="w-full h-48 relative">
                <Image
                    src={imgsrc}
                    layout={"fill"}
                    alt="project image"
                    className="object-contain"
                />
            </div>
            <div className="p-5 flex flex-col justify-center">
                <div>
                    <p className="text-xl font-thin text-slate-500">{date}</p>
                    <p className="text-2xl font-semibold">{title}</p>
                    <p className="font-thin">{description}</p>
                </div>
                <div className="w-full flex mt-5">
                    { projref == "" || gitref == "" ?
                        <>
                            {projref == "" ?
                            <>
                                <button className="w-full h-14 bg-pink-500 p-3 rounded-lg border border-pink-500 text-slate-100 hover:bg-pink-400 flex gap-2 justify-center items-center">
                                    <AiFillGithub className="text-slate-100 text-3xl"/>
                                    <p>View Project</p>
                                </button>
                            </>
                            :
                            <>
                                <button className="w-full h-14 px-5 py-2 rounded-lg border border-pink-500 text-pink-500 hover:bg-pink-200">
                                    <div className="flex justify-center items-center gap-2">
                                        <AiOutlineEye className="text-2xl"/>
                                        <p>View Project</p>
                                    </div>
                                </button>
                            </>
                            }
                        </>
                        :
                        <>
                            <button className="h-14 bg-pink-500 p-3 rounded-l-lg border border-pink-500 text-pink-500 hover:bg-pink-400 border-r-0">
                                <AiFillGithub className="text-slate-100 text-3xl"/>
                            </button>
                            <button className="w-full h-14 px-5 py-2 rounded-r-lg border border-pink-500 text-pink-500 border-l-0 hover:bg-pink-200">
                                <div className="flex justify-center items-center gap-2">
                                    <AiOutlineEye className="text-2xl"/>
                                    <p>View Project</p>
                                </div>
                            </button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

ProjectCard.defaultProps = {
    date: "2023-07-10",
    title: "Example Title",
    description: "Example description",
    imgsrc: "/icons/cars.png",
    projref: "",
    gitref: "",
};

export default ProjectCard;
