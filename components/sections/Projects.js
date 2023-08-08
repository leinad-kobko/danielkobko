import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import ProjectCard from "../ProjectCard";
import { useState } from "react";

export default function Projects() {
    
    var displayLength = 4;

    const project_list = [
        {name: "KOKO Drone Services", href: "/", category: "Website"},
        {name: "Roducha Farm", href: "/", category: "Website"},
        {name: "danielkobko.com", href: "/", category: "Website"},
    ];

    var card_list = [
        {
            key: 1, 
            position: 1, 
            card: <ProjectCard name="KOKO Drone Services" imgref="/icons/underconstruction.jpg"/>
        },
        {
            key: 2,
            position: 2, 
            card: <ProjectCard name="Roducha Farm" imgref="/icons/roducha.jpg"/>
        },
        {
            key: 3,
            position: 3, 
            card: <ProjectCard name="danielkobko.com" imgref="/icons/danielkobko.com.jpg"/>
        },
    ]

    var initial_list = [
        {
            key: 0,
            position: 0,
            colour: " bg-red-500",
        },
        {
            key: 1,
            position: 1,
            colour: " bg-blue-500",
        },
        {
            key: 2,
            position: 2,
            colour: " bg-yellow-500",
        },
        {
            key: 3,
            position: 3,
            colour: " bg-green-500",
        },
        {
            key: 4,
            position: 4,
            colour: " bg-orange-500",
        },
        {
            key: 5,
            position: 5,
            colour: " bg-purple-500",
        },
        {
            key: 6,
            position: 6,
            colour: " bg-gray-500",
        },
        {
            key: 7,
            position: 7,
            colour: " bg-indigo-500",
        },
        {
            key: 8,
            position: 8,
            colour: " bg-black",
        },
        {
            key: 9,
            position: 9,
            colour: " bg-red-800",
        },
    ]

    const [items, setItems] = useState(initial_list);

    function roll(direction) {
        var increment = 0;
        
        if (direction === "left") increment = 1;
        else if (direction === "right") increment = -1;
        
        var newItems = [...items];

        for (var item of newItems) {
            // adjust position of each item after roll
            item.position += increment;

            // edge cases
            if (item.position === newItems.length) item.position = 0;
            else if (item.position < 0) item.position = newItems.length - 1;
        }

        // console.log(newItems);

        setItems(newItems);
    }

    function applyScaleCurve(itemPosition) {
        var x = itemPosition;
        var z = displayLength;
        var scaleFactor = (((x)*(x-z)*(-1)) + 1) / 4;
        if (scaleFactor < 0.75) scaleFactor = 0.75;
        var output = `scale-[${scaleFactor*100}%]`;
        console.log(output);
        // return String("scale-[" + scaleFactor * 100 + "%]");
        return String(scaleFactor * 100 + "%");
    }

    function shouldHide(item) {
        return ((item.position + 1) > displayLength) ? "hidden" : "";
    }

    return (
        <div className="w-full h-96 flex flex-col lg:flex-row bg-gray-200 dark:bg-neutral-800">
            <button onClick={() => roll("left")} className="hidden lg:flex justify-center items-center px-5 hover:bg-gray-300 dark:hover:bg-neutral-700">
                <AiOutlineLeft className="text-3xl"/>
            </button>
            <div className="flex-1 flex justify-center items-center">
                <ul className="flex gap-10">
                    {
                    items
                    .slice()
                    .sort((a, b) => a.position - b.position)
                    .map((item) => { 
                        return( <li key={item.key}
                            className={ `w-[100px] h-[150px] flex justify-center items-center text-white bg-neutral-500 drop-shadow-xl ${item.colour} ${shouldHide(item)}`}
                            style={{
                                transition: 'all .3s ease 0.1s',
                                scale: applyScaleCurve(item.position)
                                }}
                        >
                            {item.key}
                        </li>
                        )
                    })}
                </ul>
            </div>
            <button onClick={() => roll("right")} className="hidden lg:flex justify-center items-center px-5 hover:bg-gray-300 dark:hover:bg-neutral-700">
                <AiOutlineRight className="text-3xl"/>
            </button>
            <div className="flex lg:hidden">
                <button onClick={() => roll("left")} className="w-1/2 py-5 flex justify-center hover:bg-gray-300 dark:hover:bg-neutral-700">
                    <AiOutlineLeft className="text-xl"/>
                </button>
                <button onClick={() => roll("right")} className="w-1/2 py-5 flex justify-center hover:bg-gray-300 dark:hover:bg-neutral-700">
                    <AiOutlineRight className="text-xl"/>
                </button>
            </div>
        </div>
    );
}