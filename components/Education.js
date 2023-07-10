import Skills from "./Skills";
import TLItem from "./TLItem";

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
                        {institutions.map((i, idx) => {
                            return(
                                <TLItem
                                    key={idx}
                                    name={i.name}
                                    honor={i.honor}
                                    date={i.date}
                                    location={i.location}
                                    pic={i.pic}
                                />
                            );
                        })}
                    </ol>
                </div>
                <div className="SKILLSLEARNED w-full lg:w-1/2 h-full p-10 justify-center items-center">
                    <Skills/>
                </div>
            </div>
        </div>
    );
}