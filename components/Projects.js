import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <div className="w-full lg:p-10">
            <div className="COMPLETEPROJ w-full">
                <p className="text-3xl font-thin p-5">Projects</p>
                <div className="PROJECTS w-full flex flex-wrap gap-5 p-5">
                    <ProjectCard
                        imgsrc={"/icons/underconstruction.jpg"}
                        date="June 27, 2023"
                        title="KOKO Drone Services"
                        description="Website that provides information about KOKO's and can schedule appointments"
                        pageref={"https://kokodronesservices.vercel.app/"}
                    />
                    <ProjectCard
                        imgsrc={"/icons/roducha.jpg"}
                        date="June 26, 2023"
                        title="Roducha Farm"
                        description="Website for the farm to provide information and sell merchandise."
                        pageref={"https://roducha.vercel.app/"}
                    />
                    <ProjectCard
                        imgsrc={"/icons/danielkobko.com.jpg"}
                        date="March 19, 2022"
                        title="danielkobko.com"
                        description="Website that acts as my portfolio and shows off some of my skills."
                        gitref={"https://github.com/leinad-kobko/danielkobko"}
                    />
                </div>
            </div>
        </div>
    );
}