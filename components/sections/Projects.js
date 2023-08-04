import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import ProjectCard from "../ProjectCard";

export default function Projects() {
    
    const project_list = [
        {name: "KOKO Drone Services", href: "/", category: "Website"},
        {name: "Roducha Farm", href: "/", category: "Website"},
        {name: "danielkobko.com", href: "/", category: "Website"},
    ];

    return (
        <div className="h-96 flex bg-gray-200 dark:bg-gray-800">
            {/* <button
                className="h-full flex justify-center items-center px-5 text-3xl hover:bg-gray-300 hover:dark:bg-gray-700"
            >
                <AiOutlineLeft/>
            </button>
            <div className="flex-1 overflow-hidden">
                <ul className="w-full h-full flex flex-nowrap justify-center items-center gap-20">
                    {project_list.map((proj) => {
                        return (
                            <ProjectCard 
                                key={proj.name} 
                                category={proj.category}
                                name={proj.name} 
                                href={proj.href} 
                                active={proj.name==="Roducha Farm" ? true : false}
                            />
                        );
                    })}
                </ul>
            </div>
            <button
                className="h-full flex justify-center items-center px-5 text-3xl hover:bg-gray-300 hover:dark:bg-gray-700"
            >
                <AiOutlineRight/>
            </button> */}
        </div>
    );
}