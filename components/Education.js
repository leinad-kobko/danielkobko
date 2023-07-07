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
        <div className="w-full h-full bg-purple-500 py-5 flex flex-col justify-center items-center">
            <p className="text-3xl text-slate-100 font-thin p-5">Education</p>
            <div className="CONTENT w-full h-full flex flex-row">
                <div className="TIMELINECONTENT w-1/2 h-full hidden lg:flex justify-center items-center">
                    <div className="p-10 w-[80%] h-full border border-white">
                        <p className="text-white">
                            *General Info / Info about the item where Show More was pressed*
                        </p>
                    </div>
                </div>
                <div className="TIMELINE w-full lg:w-1/2 h-full flex justify-center">
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
            </div>
        </div>
    );
}