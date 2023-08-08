import Image from "next/image";

export default function ProjectCard({category, name, href, imgref, active}) {
    const tag_colours = {
        "Website": " bg-white",
    }

    return (
        <div className="w-[100px] h-[150px] flex flex-col text-sm bg-white dark:bg-neutral-500 rounded-xl drop-shadow-xl">
            <div className="w-full h-16 relative">
                <Image
                    src={imgref}
                    layout="fill"
                    alt="Project image"
                    className="object-cover rounded-t-xl"
                />
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <p className="text-center text-[8px]">{name}</p>
                <a className="text-center text-[8px] bg-blue-500 hover:bg-blue-600 hover:cursor-pointer rounded-b-lg">See Project</a>
            </div>
        </div>
        // <div className={"relative bg-white dark:bg-[#121212] rounded-xl w-48 h-60" + (active ? " scale-150" : "")}>
        //     <div className={"text-black z-10 absolute top-2 right-2 px-5 w-fit rounded-full text-sm" + tag_colours[category]}>{category}</div>
        //     <div className="absolute top-0 left-0 w-full h-24 overflow-hidden">
        //         <Image
        //             src={"/icons/danielkobko.com.jpg"}
        //             layout="fill"
        //             alt="This website"
        //             className="object-cover rounded-t-xl"
        //         />
        //     </div>
        // </div>
    );
}