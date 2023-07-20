import Skills from "./Skills";
import TLItem from "./TLItem";

export default function Education() {
    const udemy_courses = [
        {
            name: "React",
            courseref: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
        },
        {
            name: "AWS",
            courseref: "https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/",
        },
        {
            name: "CSS & SASS",
            courseref: "https://www.udemy.com/course/advanced-css-and-sass/",
        },
        {
            name: "Javascript",
            courseref: "https://www.udemy.com/course/the-complete-javascript-course/",
        },
    ];

    return (
        <div className="w-full lg:w-[90%] h-full bg-purple-500 flex flex-col">
            <div className="CONTENT w-full h-full flex flex-wrap">                
                <div className="TIMELINE w-full lg:w-1/2 h-full flex flex-col justify-center items-center">
                    <p className="py-10 text-4xl text-slate-100 font-thin px-20">Education</p>
                    <ol className="relative border-l border-pink-300">                  
                        <TLItem
                            imgref={"/icons/udemy.png"}
                            name={"Udemy"}
                            date={"2019-Present"}
                        >
                            <div className="DIALOG py-5 px-5 lg:px-10">
                                <div className="DESC py-3">
                                    <p>Since 2019, I have passively been taking Udemy courses to evolve with web development.</p>
                                </div>
                                <div className="py-5">
                                    <p className="text-lg text-blue-600">Courses</p>
                                    <ul className="flex flex-wrap">
                                        {udemy_courses.map((course) => {
                                            return (
                                                <li key={course.name} className="py-2 px-5 border bg-pink-500 border-slate-100 text-slate-100 hover:bg-pink-600 hover:cursor-pointer">
                                                    <a target="_blank" rel="noreferrer" href={course.courseref}>{course.name}</a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </TLItem>
                        <TLItem
                            imgref={"/icons/gue.png"}
                            name={"University of Guelph"}
                            honor={"Honours B.S. (Computing - CS)"}
                            date={"2019-2023"}
                        >
                            <div className="DIALOG h-full">
                                <div className="p-5 w-full h-64 overflow-auto">
                                    <div className="DESC py-3">
                                        <p>{"During the summer of 2023, I was successfully able to complete my Honours Bachelor of Computing (Specializing in Computer Science). Programming was done in C, Java, Python, R, and SQL. I have also completed numerous mathematics courses."}</p>
                                    </div>
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
                            imgref={"/icons/STA.png"}
                            name={"St. Thomas Aquinas"}
                            honor={"Ontario Scholar"}
                            date={"2015-2019"}
                        >
                            <div className="DIALOG py-5 px-5 lg:px-10">
                                <p className="text-lg text-blue-600">Achievements</p>
                                <ul className="list-disc pl-5">
                                    <li>{"Ontario Scholars Award (>80% in every year)"}</li>
                                    <li>{"Award for Grade 11 Computer Science"}</li>
                                    <li>{"Co-Founder of Computer Science Club"}</li>
                                    <li>{"Award for Grade 11 Communication Technology (Graphic Design)"}</li>
                                    <li>{"ECOO 2019 round 2 contestant"}</li>
                                </ul>
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