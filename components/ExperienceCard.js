import Image from "next/image";
import { useState } from "react";
import { LiaPagerSolid } from "react-icons/lia"
import ButtonModal from "./ButtonModal";

export default function ExperienceCard({imgref, date, company, position, location, children}) {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="w-80 flex flex-col bg-white dark:bg-gray-600 shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-48">
                <Image
                    src={imgref}
                    layout={"fill"}
                    alt={"CIBC logo 2023"}
                    className={"object-contain"}
                />
            </div>
            <div className="px-5 py-5 flex flex-col items-left">
                <p className="pt-5 text-slate-600 dark:text-slate-300">{date}</p>
                <p className="text-black dark:text-slate-100 text-3xl font-semibold">{company}</p>
                <p className="text-slate-600 dark:text-slate-300 text-xl">{position}</p>
                <button onClick={handleClickOpen}
                    className="mt-5 w-full h-14 bg-pink-500 p-3 rounded-lg border border-pink-500 text-slate-100 hover:bg-pink-400 flex gap-2 justify-center items-center"
                >
                    <LiaPagerSolid className="text-3xl"/>
                    More Details
                </button>
            </div>
            <ButtonModal
                open={open}
                close={handleClose}
                imgref={imgref}
                title={company}
            >
                {children}
            </ButtonModal>
        </div>
    );
}