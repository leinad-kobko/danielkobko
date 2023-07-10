import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <div className="w-full lg:p-10">
            <div className="COMPLETEPROJ w-full">
                <p className="text-3xl font-thin p-5">Projects</p>
                <div className="PROJECTS flex flex-wrap gap-5 p-5">
                    <ProjectCard
                        imgsrc={"/icons/cars.png"}
                        date="June 26, 2023"
                        title="Both Links Component"
                        description="If I provide both links to this component both buttons will show."
                        projref={"https://roducha.vercel.app/"}
                        gitref={"https://github.com/leinad-kobko/roducha"}
                    />
                    <ProjectCard
                        imgsrc={"/icons/pacman.png"}
                        date="June 27, 2023"
                        title="Only Github"
                        description="If I provide my github link to this component only github will show."
                        gitref={"https://github.com/leinad-kobko/roducha"}
                    />
                    <ProjectCard
                        imgsrc={"/icons/gue.png"}
                        date="June 28, 2023"
                        title="Only Project"
                        description="If I provide only project link to this component only project will show."
                        projref={"https://roducha.vercel.app/"}
                    />
                </div>
            </div>
        </div>
    );
}