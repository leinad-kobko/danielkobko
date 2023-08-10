import ThemeButton from "/components/ThemeButton"
import Image from "next/image";
import { useState } from "react";
import {RiMenu5Fill} from "react-icons/ri"

function SmallNav({nav_elements}) {
    const [navWidth, setNavWidth] = useState("8rem")
    const [navHeight, setNavHeight] = useState("0rem");
    const [navVisible, setNavVisible] = useState("hidden");

    function handleMenuOpen() {
        setNavWidth("18rem");
        setNavHeight("20rem");
        setNavVisible("100%");
    }
    
    function handleMenuClose() {
        setNavWidth("8rem");
        setNavHeight("0rem");
        setNavVisible("0%")
    }

    return (
        <div className="absolute bottom-10 w-full flex justify-center">
            {navWidth === "18rem" ? <button onClick={() => handleMenuClose()} className="absolute -bottom-10 w-screen h-screen"/>:<></>}
            <div className={"absolute bottom-10 w-[18rem] bg-gray-100 dark:bg-gray-900 overflow-hidden rounded-t-xl border border-gray-400"}
                style={{
                    width: navWidth,
                    height: navHeight,
                    // scale: navVisible,
                    transition: "all .3s"
                }}
            >
                <ul className="w-full h-full">
                    {nav_elements.map((item) => {
                        return (
                            <li key={item.text} className="w-full hover:bg-black/20 text-center text-xl flex">
                                <a onClick={()=>handleMenuClose()} className="w-full py-5" href={item.href}>{item.text}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <nav className="bg-gray-100 dark:bg-gray-900 drop-shadow-xl border border-gray-400 rounded-full flex justify-center transition ease-in-out duration-500"
                style={{
                    width: navWidth,
                    transition: "all .3s ease"
                }}
            >
                <a><ThemeButton/></a>
                <button onClick={() => (navWidth === "18rem") ? handleMenuClose():handleMenuOpen()} className="p-5 text-2xl"><RiMenu5Fill/></button>
            </nav>
        </div>
    );
}

function LargeNav({nav_elements}) {
    return (
        <div className="w-full flex pt-2">
            <div className="w-full flex items-center ml-10">
                <div className="LIGHT-LOGO w-16 h-16 relative dark:hidden">
                    <Image
                        src={"/icons/dk-black.png"}
                        layout={"fill"}
                        alt={"Daniel Kobko's personal logo"}
                        className="object-contain"
                    />
                </div>
                <div className="DARK-LOGO w-16 h-16 relative hidden dark:flex">
                    <Image
                        src={"/icons/dk.png"}
                        layout={"fill"}
                        alt={"Daniel Kobko's personal logo"}
                        className="object-contain"
                    />
                </div>
            </div>
            <nav className="w-full flex justify-center gap-10 items-center">
                {nav_elements.map((section) => {
                    return (
                    <a 
                        key={section.text} 
                        href={section.href}
                        className="py-2 px-5 rounded-full hover:bg-gray-200 hover:dark:bg-gray-800"
                        >
                        {section.text}
                    </a>)
                })}
            </nav>
            <div className="w-full flex items-center justify-end mr-10">
                <ThemeButton/>
            </div>
        </div>
    );
}

export default function NavigationBar() {

    const nav_elements = [
        {text: "Introduction", href: "#top",},
        {text: "Projects", href: "#Projects",},
        {text: "Experience", href: "#Experience",},
        {text: "Learning", href: "#Learning",},
    ];

    return (
        <div className="z-40 w-full">
            <div className="flex lg:hidden">
                <SmallNav nav_elements={nav_elements}/>
            </div>
            <div className="hidden lg:flex flex-col bg-white dark:bg-[#121212] border-b border-gray-200 dark:border-gray-700 pb-2">
                <LargeNav nav_elements={nav_elements}/>
            </div>
        </div>
    );
}