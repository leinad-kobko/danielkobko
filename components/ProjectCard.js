import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineWebAsset } from "react-icons/md";

export default function ProjectCard({item}) {
    const tag_colours = {
        "Website": " bg-white",
    }

    function setStyle(item) {
        var newStyle = {
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

    function openSource(pageref) {
        if (pageref.slice(0, 18) === "https://github.com")
            return true;
        return false;
    }

    return (
        <li key={item.colour} className="absolute w-[195px] h-[108px] list-none transition ease-in-out duration-500 rounded-xl"
            style={setStyle(item)}
        >
            <div className="z-0 w-full h-full absolute top-0 left-0 flex flex-col justify-between rounded-xl overflow-hidden">
                <div className="w-full h-full relative">
                    <Image
                        src={item.imgref}
                        layout="fill"
                        alt="Project picture"
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="z-10 absolute top-0 left-0 w-full h-full">
                <div className="absolute top-3 -left-1 bg-orange-500 rounded-r-md border border-orange-600 text-white">
                    <p className="text-[10px] px-3 font-bold">Website</p>
                </div>
            </div>
            {item.position === 2 ? 
                <div className="flex flex-col items-center">
                    <p className="absolute w-full -bottom-[30px] text-center">{item.name}</p>
                    <a target="_blank" rel="noreferrer" href={item.pageref}
                    className="hover:cursor-pointer absolute w-fit py-1 px-5 -bottom-[55px] text-white text-[10px] bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center gap-2">
                        { openSource(item.pageref) ?
                            <AiFillGithub className="text-[16px]"/>
                            :
                            <MdOutlineWebAsset className="text-[14px]"/>
                        }
                        <p>See Project</p>
                    </a>
                </div>
                :
                <></>
            }
        </li>
    );
}