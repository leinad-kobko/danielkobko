import Image from "next/image";

export default function ProjectCard({category, name, href, active}) {
    const tag_colours = {
        "Website": " bg-white",
    }

    return (
        <div className={"relative bg-white dark:bg-[#121212] rounded-xl w-48 h-60" + (active ? " scale-150" : "")}>
            <div className={"text-black z-10 absolute top-2 right-2 px-5 w-fit rounded-full text-sm" + tag_colours[category]}>{category}</div>
            <div className="absolute top-0 left-0 w-full h-24 overflow-hidden">
                <Image
                    src={"/icons/danielkobko.com.jpg"}
                    layout="fill"
                    alt="This website"
                    className="object-cover rounded-t-xl"
                />
            </div>
            
        </div>
    );
}