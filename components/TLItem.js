import { useState } from "react";
import ButtonModal from "./ButtonModal";

export default function TLItem(props) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-slate-100 rounded-full -left-1.5 border border-pink-300"></div>
            <time className="mb-1 text-sm font-normal leading-none text-pink-300">{props.date}</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{props.name}</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-pink-300">{props.honor}</p>
            <button onClick={handleClickOpen} className="w-full flex font-thin justify-center items-center rounded-xl py-2 gap-4 
                               text-slate-100 border border-slate-100 ease-in-out duration-300 hover:bg-slate-100/20">
                <p>Show More</p>
            </button>
            <ButtonModal
                open={open}
                close={handleClose}
                imgref={props.imgref}
                title={props.name}
            >
                {props.children}
            </ButtonModal>
        </li>
    );
}