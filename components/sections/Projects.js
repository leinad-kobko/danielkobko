import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import ProjectCard from "../ProjectCard";
import { useState, useEffect } from "react";

export default function Projects() {

    const initial_list = [
        {
            colour: "pink",
            position: 1,
            name: "Bimota Limos",
            date: "November 13, 2023",
            pageref: "https://bimota-limos.vercel.app",
            imgref: "/icons/underconstruction.jpg"
        },
        {
            colour: "green",
            position: 2,
            name: "Roducha Farm",
            date: "June 13, 2023",
            pageref: "https://roducha.vercel.app",
            imgref: "/icons/roducha.jpg"
        },
        {
            colour: "orange",
            position: 3,
            name: "danielkobko.com",
            date: "June 13, 2023",
            pageref: "https://github.com/leinad-kobko/danielkobko",
            imgref: "/icons/danielkobko.com.jpg"
        },
    ];
    
    const [items, setItems] = useState(initial_list);

    function setStyle(item) {
        var newStyle = {
            background: item.colour,
            transform: "scale(1) translate3d(0, 0, 0)",
            zIndex: -1,
        }

        if (item.position === 1) {
            newStyle.transform = "scale(1.5) translate3d(-30px, 0px, 0px)";
            newStyle.zIndex = 10;
        }
        else if (item.position === 2) {
            newStyle.transform = "scale(1.75) translate3d(0px, 0px, 0px)";
            newStyle.zIndex = 30;
        }
        else if (item.position === 3) {
            newStyle.transform = "scale(1.5) translate3d(30px, 0px, 0px)";
            newStyle.zIndex = 10;
        }
        else {
            newStyle.transform = "scale(0)"
        }
        
        return newStyle;
    }

    function roll(direction) {
        var increment = 0;

        if (direction === "left") {
            increment = -1;
        } else if (direction === "right") {
            increment = 1;
        }

        var updatedItems = [...items];

        for (var item of updatedItems) {
            item.position += increment;

            if (item.position < 1) item.position = updatedItems.length;
            else if (item.position > updatedItems.length) item.position = 1;
        }

        setItems(updatedItems);
    }

    return (
        <div className="w-full max-w-3xl">
            <p className="px-10 text-4xl md:text-5xl text-center font-bold">Projects</p>
            <div className="w-full p-5 flex justify-center items-center">
                <p className="text-justify">
                    Below are projects I have actively been working on to improve my skills, knowledge, and work-flow as a Web Developer. I have learned many useful tools and gotten to know modern frameworks with them. I hope to soon branch out and start working more with Unity for game development and python for machine learning as well.
                </p>
            </div>
            <div className="w-full px-5 h-80 flex flex-col items-center lg:flex-row">
                <button onClick={() => roll("left")} className="hidden p-5 w-fit h-fit rounded-full lg:flex justify-center items-center hover:bg-gray-300 dark:hover:bg-neutral-700">
                    <AiOutlineLeft className="text-3xl"/>
                </button>
                <div className="flex-1 flex justify-center items-center">
                    <ul className="flex justify-center items-center relative">
                        {
                        items
                        .map((item) => { 
                            return( 
                                <ProjectCard
                                    key={item.name}
                                    item={item}
                                />
                            )
                        })}
                    </ul>
                </div>
                <button onClick={() => roll("right")} className="hidden p-5 w-fit h-fit rounded-full lg:flex justify-center items-center px-5 hover:bg-gray-300 dark:hover:bg-neutral-700">
                    <AiOutlineRight className="text-3xl"/>
                </button>
                <div className="w-full flex lg:hidden translate-y-[70px]">
                    <button onClick={() => roll("left")} className="w-full py-5 flex justify-center rounded-l-lg hover:bg-gray-300 dark:hover:bg-neutral-700">
                        <AiOutlineLeft className="text-xl"/>
                    </button>
                    <button onClick={() => roll("right")} className="w-full py-5 flex justify-center rounded-r-lg hover:bg-gray-300 dark:hover:bg-neutral-700">
                        <AiOutlineRight className="text-xl"/>
                    </button>
                </div>
            </div>
        </div>
    );
}