import ExperienceCard from "./ExperienceCard";
import Image from "next/image";

export default function Experience() {
    return (
        <div className="w-full lg:p-10">
            <p className="text-3xl font-thin p-5">Experience</p>
            <div className="w-full flex flex-wrap gap-5 p-5">
                <ExperienceCard
                    imgref={"/icons/cibc.png"}
                    date={"May 2020 - Aug 2020"}
                    company={"CIBC - Financial Crimes"}
                    position={"Data Engineer Intern"}
                    location={"Work from home"}
                >
                    <div className="DIALOG py-5 px-5 lg:px-10">
                        <p className="text-lg text-blue-600">Responsibilties</p>
                        <ul className="list-disc pl-5">
                            <li>Apply innovative thinking to create opportunities for better employment and improve company image</li>
                            <li>Update an application to help with employee productivity</li>
                            <li>Time management</li>
                            <li>Critical thinking as well as working productively</li>
                            <li>Work with multiple teams.</li>
                        </ul>
                    </div>
                </ExperienceCard>
            </div>
        </div>
    );
}