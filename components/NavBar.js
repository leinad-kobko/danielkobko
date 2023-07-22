import Image from "next/image";
import ThemeButton from "./ThemeButton";

export const nav_items = [
    "Introduction", 
    "Education", 
    "Experience", 
    "Projects", 
];

export default function NavBar() {

    return (
        <div className="NAVBAR w-1/5 h-screen flex flex-col justify-between py-10">
            <div className="flex flex-col items-center gap-10">
                <div className="DKLOGO w-40 h-40 relative">
                    <Image
                        src={"/icons/dk.png"}
                        layout={"fill"}
                        alt={"Daniel Kobko logo"}
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col items-center">
                    <p className="NAME text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-100">Daniel Kobko</p>
                    <p className="NAME text-sm lg:text-sm xl:text-xl font-thin text-slate-100">Full-stack Software Developer</p>
                </div>
                
                <ul className="flex flex-col items-center gap-4">
                    {nav_items.map((nav_item, idx) => {
                        return (
                            <a key={idx} href={"#" + nav_item} className="w-full text-2xl font-thin text-slate-100 ease-in-out duration-100">
                                <li className="w-full text-center px-10 py-3 hover:bg-slate-100/20 hover:cursor-pointer">
                                    {nav_item}
                                </li>
                            </a>
                        );
                    })}
                    <li>
                        <ThemeButton/>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col items-center text-slate-100 font-thin">
                <p>Designed by Daniel Kobko</p>
                <p>Copyright © 2023 - All Rights Reserved.</p>
            </div>
        </div>
    );
}